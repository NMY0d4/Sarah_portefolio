'use client';
import SecBtn from '@/components/ui/secBtn/SecBtn';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Login = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [session.status, router]);

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', { email, password });
  };
  if (session.status === 'unauthenticated') {
    return (
      <div className='flex justify-center w-full'>
        <div className='flex flex-col justify-center items-center gap-10 w-full'>
          <form
            className='w-[300px] flex flex-col items-center gap-5'
            onSubmit={handleSubmit}
          >
            <input
              type='email'
              placeholder='email'
              className='inputStyle'
              required
            />
            <input
              type='password'
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
  }
};

export default Login;
