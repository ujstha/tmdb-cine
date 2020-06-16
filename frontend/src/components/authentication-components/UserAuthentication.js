import React from 'react';
import { InputFieldGroup } from '../helper-components/InputFieldGroup';
import { UserAuthenticationAlert } from '../helper-components/Notifications';

export const UserAuthentication = ({
  onSubmit,
  isLoading,
  disabled,
  success,
  error,
  formTitle,
  urlType,
  onChange,
}) => (
  <div className='user__authentication-wrapper'>
    <form
      id='json'
      onSubmit={onSubmit}
      className='user__authentication-form col-md-4'
    >
      <h3>{formTitle}</h3>
      {success && (
        <UserAuthenticationAlert alertType='success' message={success} />
      )}
      {error && <UserAuthenticationAlert alertType='danger' message={error} />}
      {urlType === 'register' && (
        <>
          <InputFieldGroup
            type='text'
            name='firstname'
            label='Firstname'
            placeholder='Enter your firstname'
          />
          <InputFieldGroup
            type='text'
            name='lastname'
            label='Lastname'
            placeholder='Enter your lastname'
          />
        </>
      )}
      <InputFieldGroup
        type='text'
        name='username'
        label='Username'
        placeholder='Enter your username'
        onChange={onChange}
      />
      <InputFieldGroup
        type='password'
        name='password'
        label='Password'
        placeholder='Enter your password'
        onChange={onChange}
      />

      <button className='btn' disabled={disabled}>
        {isLoading ? 'Loading...' : urlType}
      </button>
      {urlType === 'register' ? (
        <p>
          Already have an account? <a href='/auth/login'>Login here</a>
        </p>
      ) : (
        <p>
          Don't have an account? <a href='/auth/register'>Register here</a>
        </p>
      )}
    </form>
  </div>
);
