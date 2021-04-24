import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
const signin = () => {
  return (
    <div>
      <Head>
        {' '}
        <title>Sign In</title>{' '}
      </Head>
      <form className='mx-auto my-4' style={{ maxWidth: '500px' }}>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter email'
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Password'
          />
        </div>
        <button type='submit' className='btn btn-dark'>
          Login
        </button>
        <br />
        Don't have an account?
        <Link href='/register'>
          <a style={{ textDecoration: 'none' }}>Register Now</a>
        </Link>
      </form>
    </div>
  );
};

export default signin;
