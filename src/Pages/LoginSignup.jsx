import React from "react";
import './CSS/LoginSignUp.css'

const LoginSignup = ()=>{
    return(
        <div className="loginSignup">
            <div className="loginSignup-container">
                <h1>Sign Up</h1>
                <div className="loginSignup-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="emal" placeholder="Your Email" />
                    <input type="password" placeholder="Your Password" />
                </div>
                <button>Continue</button>
                <p className="loginSignup-login">Already have an account? <span>Login here</span></p>
                <div className="loginSignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup