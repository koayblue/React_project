import React from 'react'
import {FaEnvelope, FaLock } from 'react-icons/fa'

function Login() {
  return (
   <header>

         <div className="text-top">
            <span>Login Your Count</span>
          </div>

          <div className="input-top">

              <div className="container">
                <span>Not a member ?</span>
                <button className='btn'> <a href=""> Sign Up</a></button>
              </div>
                
              <div className="form">
                <span>Count An Exist</span>
                <form action="" method="post">
                    
                <div className="flex-input">
                  <FaEnvelope className='icon'/><input type="email" name='uemail' className='fuild'placeholder='email' />
                </div>
                <div className="flex-input">
                  <FaLock className='icon'/><input type="password" name='upwd' className='fuild' placeholder='password'/>
                </div><br />
                <input type="button" value="Sign In" className='bottom'/>
                <label htmlFor="" className='exit'> <a href="#">  | Sing_Up</a></label>

                </form>
            </div>
        </div>
   </header>
  )
}

export default Login
