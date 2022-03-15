import React from 'react';
import {render} from '@testing-library/react-native';
import LoginScreen from '../../src/screens/login/LoginScreen';

describe('Login Screen', () => {
  it('renders correctly', () => {
    const login = jest.fn();
    login.mockReturnValue({
      changeUsername: jest.fn(),
      changePassword: jest.fn(),
      handleSubmit: jest.fn(),
    });
    render(<LoginScreen login={login} />);
  });
});
