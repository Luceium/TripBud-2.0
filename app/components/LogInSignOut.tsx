'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const LogInSignOut = () => {
  let username = sessionStorage.getItem("userName");
  console.log(username);
  const router = useRouter();

  const login = () => { router.push('/sign-in'); }
  const logout = () => { 
    sessionStorage.clear();
    alert("Successfully logged out");
    router.refresh();
   }
  const signup = () => {
    router.push('/sign-up');
  }
  const dashboard = () => {
    router.push('/dashboard');
  }

  return (
    <div className="sign-in-sign-up flex flex-col justify-center items-center">
      {
        !username ? 
          <>
            <button className="btn" onClick={login}>
              Log In
            </button>
            <button className="btn" onClick={signup}>
              Sign Up
            </button>
          </> :
          <>
            <p>
              Hi {username}!
            </p>
            <button className="btn" onClick={dashboard}>
              Dashboard
            </button>
            <button className="btn" onClick={logout}>
              Log out
            </button>
          </> 
      }
    </div>
  )
}

export default LogInSignOut