import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import LoginScreen from '../../src/screens/login/LoginScreen';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Login Screen', () => {
  it('renders correctly', () => {
    const login = jest.fn();
    login.mockReturnValue({
      onAuthenticate: jest.fn(),
      onDismissError: jest.fn(),
    });
    render(<LoginScreen login={login} />);
  });

  it('should login successfully', () => {
    const login = jest.fn();
    const onAuthenticateMock = jest.fn();
    login.mockReturnValue({
      onAuthenticate: onAuthenticateMock,
      onDismissError: jest.fn(),
    });
    const {getAllByA11yHint, getByText} = render(<LoginScreen login={login} />);
    const inputs = getAllByA11yHint('input');
    fireEvent.changeText(inputs[0], 'dummyuser');
    fireEvent.changeText(inputs[1], 'dummypass');
    fireEvent.press(getByText('Login'));

    expect(onAuthenticateMock).toBeCalledWith('dummyuser', 'dummypass');
  });
});
