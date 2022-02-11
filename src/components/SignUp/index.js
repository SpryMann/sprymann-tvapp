import './SignUp.css';
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import signUpUser from '../../helpers/signUpUser';
import signInUser from '../../helpers/signInUser';

const SignUp = () => {
  const location = useLocation().pathname;
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (location === '/signup') {
      signUpUser(emailInput, passwordInput).catch((error) =>
        console.log(error)
      );
    } else if (location === '/signin') {
      signInUser(emailInput, passwordInput).catch((error) =>
        console.log(error)
      );
    }
  };

  return (
    <div className="sign">
      <form className="sign__form" onSubmit={(e) => handleSubmitForm(e)}>
        <div className="sign__wrap">
          <p className="sign__heading">Email</p>
          <input
            className="sign__input"
            type="text"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>

        <div className="sign__wrap">
          <p className="sign__heading">Password</p>
          <input
            className="sign__input"
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>

        <p>
          {location === '/signup'
            ? 'Already have account?'
            : "Haven't account yet?"}
          <Link
            className="sign__link"
            to={location === '/signup' ? '/signin' : '/signup'}
          >
            {location === '/signup' ? 'Sign in' : 'Sign up'}
          </Link>
        </p>

        <button className="sign__button">
          {location === '/signup' ? 'Sign up' : 'Sign in'}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
