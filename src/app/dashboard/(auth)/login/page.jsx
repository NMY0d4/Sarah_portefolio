'use client';
import SecBtn from '@/components/ui/secBtn/SecBtn';
import { signIn } from 'next-auth/react';
import React from 'react';

const Login = () => {
  return (
    <div>
      <SecBtn
        url='#'
        text='Login with Google'
        onClick={() => signIn('google')}
      />
    </div>
  );
};

export default Login;
