import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className='container'>
       <div className='navbar'>
        <div className='static'>
            <nav>
            <Link to="/home"><a href='#'>Home</a></Link>
            <Link to="/create-session"><a href='#'>Create-Session</a></Link>
            <Link to="/dashboard"><a href='#'>Dashboard</a></Link>
            </nav>
        </div>
        <div className='action'>
        <div className='action-options'>
            <button>English</button>
            <Link to="/sign-in"><button className='signin-btn'>Sign In</button></Link>
            <Link to="/register"><button className='register-btn'>Register</button></Link>
        </div>
        </div>
       </div>

       <div className='body'>
       <div className='info-graphics'>
            <div  className='img-container'>
                {/* <img src='/assets/security.jpg'  width={390}></img> */}
            </div>
            <h1>Sign In to access pricing and promo demo</h1>
            <div className='info-graphics-item'>Don't Have an account? <br /><button>Register</button></div>
       </div>

       <div className='login-form'>
            <form>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password'/>
                <span className='muted-text'>Forgot password?</span>
                <button className='btn-submit'>Sign in</button>
                <div className='or'>Or</div>
                <div className='account-group'>
                    <div className='google'><img src='/assets/ggogle-icon.png' /></div>
                    <div className='apple'><img src='/assets/apple-icon.png' /></div>
                </div>
            </form>
       </div>
       </div>
    </div>
  )
}

export default Login;