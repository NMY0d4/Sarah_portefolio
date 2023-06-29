'use client';
import SecBtn from '@/components/ui/secBtn/SecBtn';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';

const initialRegisterState = {
  email: '',
  password: '',
};

const Login = () => {
  const [registerData, setRegisterData] = useState(initialRegisterState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = registerData;

    signIn('credentials', { email, password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='flex justify-center w-full'>
      <div className='flex flex-col justify-center items-center gap-10 w-full'>
        <form
          className='w-[300px] flex flex-col items-center gap-5'
          onSubmit={handleSubmit}
        >
          <input
            type='email'
            name='email'
            onChange={handleChange}
            placeholder='email'
            className='inputStyle'
            required
          />
          <input
            type='password'
            name='password'
            onChange={handleChange}
            placeholder='password'
            className='inputStyle'
            required
          />
          <SecBtn text='Login' />
        </form>
        <SecBtn
          type='button'
          text='Login with Google'
          classPerso='px-3'
          onClick={() => signIn('google')}
        />
      </div>
    </div>
  );
};

export default Login;
