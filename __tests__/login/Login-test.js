import {Login} from '../../src/screens/login/Login';
import {useDispatch} from 'react-redux';
import {showError} from '../../src/stores/app/AppAction';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Login Business Logic Test', () => {
  it('Should login successfully', async () => {
    const mockedDispatch = jest.fn();
    useDispatch.mockReturnValue(mockedDispatch);
    const service = jest.fn();
    const callLoginServiceMock = jest.fn();

    service.mockReturnValue({
      callLoginService: callLoginServiceMock.mockResolvedValue(),
    });

    await Login(service).onAuthenticate('dummyuser', 'dummypassword');
    expect(callLoginServiceMock).toBeCalledWith('dummyuser', 'dummypassword');
  });

  it('Should failed to login', async () => {
    const mockedDispatch = jest.fn();
    useDispatch.mockReturnValue(mockedDispatch);
    const service = jest.fn();
    const callLoginServiceMock = jest.fn();

    service.mockReturnValue({
      callLoginService: callLoginServiceMock.mockRejectedValue(),
    });

    await Login(service).onAuthenticate('dummyuser', 'dummypass');
    expect(mockedDispatch).toHaveBeenNthCalledWith(2, showError(undefined));
  });

  it('Should dismiss error', async () => {
    const mockedDispatch = jest.fn();
    useDispatch.mockReturnValue(mockedDispatch);
    const service = jest.fn();
    const callLoginServiceMock = jest.fn();

    service.mockReturnValue({
      callLoginService: callLoginServiceMock.mockRejectedValue(),
    });

    await Login(service).onDismissError('dummyuser', 'dummypass');
    expect(mockedDispatch).toBeCalledWith(showError(''));
  });
});
