import React from 'react';

import { signUpWithEmailAndPwd } from '../../firebase/auth.utils';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { createUserProfileDocument } from '../../firebase/firestore.utils';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submitHandler = async e => {
    e.preventDefault();
    if (this.state.password.length < 6)
      alert('Password must contain at least 6 characters');
    else if (this.state.password !== this.state.confirmPassword)
      alert('Password and confirm password are different');
    else {
      try {
        const { user } = await signUpWithEmailAndPwd(
          this.state.email,
          this.state.password
        );
        createUserProfileDocument(user, { displayName: this.state.name });
        this.setState({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  render() {
    return (
      <div className='sign-up'>
        <h1 className='title'> I want to create an account</h1>
        <span>Register with you email and password</span>
        <form onSubmit={this.submitHandler}>
          <FormInput
            label='Name'
            name='name'
            type='text'
            value={this.state.name}
            handleChange={this.changeHandler}
            required
          ></FormInput>
          <FormInput
            label='E-mail'
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.changeHandler}
            required
          ></FormInput>
          <FormInput
            label='Password'
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.changeHandler}
            required
          ></FormInput>
          <FormInput
            label='Confirm Password'
            name='confirmPassword'
            type='password'
            value={this.state.confirmPassword}
            handleChange={this.changeHandler}
            required
          ></FormInput>
          <div className='buttons'>
            <CustomButton type='submit'>Register</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
