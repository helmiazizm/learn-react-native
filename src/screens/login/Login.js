import {useDispatch} from 'react-redux';
import {goToScreen} from '../../navigation/NavigationHelper';
import {TODO_PATH} from '../../navigation/NavigationPath';
import {showError, showLoading} from '../../stores/app/AppAction';
import {login} from '../../stores/login/LoginAction';

export const Login = service => {
  const dispatch = useDispatch();
  const {callLoginService} = service();
  const onAuthenticate = async (userName, password) => {
    try {
      dispatch(showLoading(true));
      await callLoginService(userName, password);
      dispatch(login({isLoggedIn: true}));
      goToScreen(TODO_PATH, true);
    } catch (e) {
      dispatch(showError(e));
    } finally {
      dispatch(showLoading(false));
    }
  };

  const onDismissError = () => dispatch(showError(''));
  return {
    onAuthenticate,
    onDismissError,
  };
};
