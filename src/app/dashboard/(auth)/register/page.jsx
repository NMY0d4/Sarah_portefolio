'use client';
import SecBtn from '@/components/ui/secBtn/SecBtn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const initialRegisterState = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const [err, setErr] = useState(false);
  const [registerData, setRegisterData] = useState(initialRegisterState);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...registerData }),
      });

      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created');
    } catch (err) {
      setErr(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
      <form className='w-[300px] flex flex-col gap-5' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          onChange={handleChange}
          placeholder='username'
          className='inputStyle'
          required
        />
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
        <SecBtn text="S'inscrire" />
      </form>
      {err && 'Something went wrong!'}
      <Link href={'/dashboard/login'}>Login with an existing account</Link>
    </div>
  );
};

export default Register;
