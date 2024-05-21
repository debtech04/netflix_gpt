import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignForm] = useState(true)

  const toggleSignInForm = () =>{
    setIsSignForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="loginbg" />

        <form className='bg-black bg-opacity-80 w-[350px] absolute top-[30%] left-0 right-0 mx-auto p-10 rounded-lg txt-white'>
            <h1 className='text-white font-bold mb-4 text-3xl mb-5'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm &&
              <input type="text" placeholder='Enter your Name' className='height-30 bg-gray-700 p-2 mb-5 w-full rounded-sm' />
            }
            <input type="text" placeholder='Enter your email' className='height-30 bg-gray-700 p-2 mb-5 w-full rounded-sm' />
            
            <input type="pasword" placeholder='Enter your pasword' className='height-30 bg-gray-700 p-2 mb-5 w-full rounded-sm' />
            <button className='bg-red-800 p-2 w-full font-bold rounded-sm mt-10 text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p onClick={toggleSignInForm} className='mt-4 text-white cursor-pointer'> {isSignInForm ? "Don't have an account ? Sign Up" : "Already registred ? Sign In now"}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
