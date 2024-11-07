import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'


function Login() {
  
  const [siginState, setSiginState] = useState('Sign In');

  const handleSignUp = () =>  setSiginState('Sign Up');

  const handleSignIn = () => setSiginState('Sign In');
  
  return (
    <div className='login'>
      <img src={logo} alt="logo" className='login-logo'/>
      <div className="login-form">
        <h1>{siginState}</h1>
        <form action="">
          {siginState==='Sign Up'?<input type="text" placeholder='Enter name' />: <></>}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='password' />
          <button>{siginState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id='check'  required/>
              <label htmlFor="check">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
          <div className="form-switch">
            {
            siginState==='Sign In'?  <p>New to Netflix? <span onClick={handleSignUp}>Sign Up Now</span></p>
              :<p>Already have an account? <span onClick={handleSignIn}>Sign In Now</span></p>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login