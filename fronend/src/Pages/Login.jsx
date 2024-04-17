import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function Login() {
  let navigate=useNavigate();
  let name=useRef();
  let passw=useRef();
  let mail=useRef();
  const login= async (e)=>{
      e.preventDefault();
      const username=name.current.value;
      const password=passw.current.value;
      const email=mail.current.value;
      try {
        let res=await axios.post('http://localhost:8081/login',{username,password,email});
        navigate('/');
      } catch (error) {
        console.log("can not login");
      }
      

  }
  return (
    <div>
        
  <div className="row">
  <div className="col-md-6 mx-auto">
   <h1 className="display-6">Login</h1>
      <form onSubmit={login}>
          <div className="mb-3">
           <label htmlFor="username" className="form-label">Username</label>
           <input type="text" ref={name}className="form-control" name="username" placeholder="username"/>
          </div>
          <div  className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" ref={mail} className="form-control" name="email" placeholder="email"/>
           </div>
          <div  className="mb-3">
           <label htmlFor="password" className="form-label">Password</label>
           <input type="password" ref={passw} className="form-control" name="password" placeholder="password"/>
          </div>
          <button className="btn btn-sm btn-success">Login</button>
          <p className="fw-light mt-2">Don't have an account,<a href="/register">SignUp</a></p>
      </form>
  </div>

</div>
    </div>
  )
}

export default Login