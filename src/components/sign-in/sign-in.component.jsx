import React from 'react';

import './sign-in.styles.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  formSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <div className='sign-in'>
        <h1 className='title'>I aleready have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.formSubmit}>
          <FormInput
            label='E-mail'
            name='email'
            type='text'
            value={this.state.email}
            handleChange={e => this.setState({ email: e.target.value })}
            required
          />
          <FormInput
            label='Password'
            name='password'
            type='password'
            value={this.state.password}
            handleChange={e => this.setState({ password: e.target.value })}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
