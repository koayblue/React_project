import React from 'react'
import {FaUser , FaEnvelope , FaLock , FaUnlock} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Sing_Up() {
  return (
        <header>

          <div className="text-top">
            {/* <p>Create Count</p> */}
            <span>Register Your Count</span>
          </div>

          <div className="input-top">

              <div className="container">
                <span>Allready count ?</span>
                <button className='btn'> <a href="#"> Sign In</a></button>
              </div>
                
              <div className="form">
                <span>Sing An Count</span>
              <form action="" method="post">
                <div className="two-form">
                  <div className="flex-input">
                    <FaUser className='icon'/> <input type="text" name='uname' className='fuild' placeholder='name' />
                  </div>
                  <div className="flex-input">
                    <FaUser className='icon'/><input type="text" name='usname' className='fuild' placeholder='username'/>
                  </div>
                </div>
                <div className="flex-input">
                  <FaEnvelope className='icon'/><input type="email" name='uemail' className='fuild'placeholder='email' />
                </div>
                <div className="flex-input">
                  <FaLock className='icon'/><input type="password" name='upwd' className='fuild' placeholder='password'/>
                </div>
                <div className="flex-input">
                  <FaUnlock className='icon'/><input type="password" name='spwd' className='fuild' placeholder='confirmer password'/><br />

                  <div className="two-col">
                    <div className="check">
                      <input type="checkbox" />
                      <label htmlFor="check-login"> Remember Me</label>
                    </div>
                    <div className="two">
                      <label htmlFor=""> <a href="#">  | Forgot Password</a></label>
                    </div>
                  </div>
                </div><br />
                <input type="button" value="Creat Count" className='bottom'/>
              </form>
            </div>

          </div>
          
            
        </header>

  )
}

export default Sing_Up
