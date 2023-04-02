import React from 'react'
import './register.css'
const Register = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social App</h3>
                <span className="loginDesc">Connect with Friends</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='UserName' className='loginInput' />
                    <input placeholder='Email' className='loginInput' />
                    <input placeholder='Password' className='loginInput' />
                    <input placeholder='Confirm Password' className='loginInput' />
                    <button className="loginButton">Sign up</button>
                    <button className="loginRegisterButton">Log int Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register