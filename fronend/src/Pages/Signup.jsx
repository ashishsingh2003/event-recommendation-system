import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup() {
  let navigate=useNavigate();
  let name=useRef();
 
  let mail=useRef();
  let passw=useRef();
  const submitform=async (e)=>{
      e.preventDefault();
      const username=name.current.value;
    
      const email=mail.current.value;
      const password=passw.current.value;
      try {
        console.log("error")
        let res=await axios.post('http://localhost:8081/register',{username,email,password})
        console.log(res);
        navigate('/login');
       } catch (error) {
         console.log("can not signup");
       }

  }
  return (
    <div>
      <div className="row">
  
  <div className="col-md-6 mx-auto">
   <h1 className="display-6">Sign up</h1>
      <form onSubmit={submitform} >
          <div className="mb-3">
           <label htmlFor="name" className="form-label">Username</label>
           <input type="text" ref={name}className="form-control" name="name" placeholder="username"/>
          </div>
          <div  className="mb-3">
           <label htmlFor="email" className="form-label">E-mail</label>
           <input type="email"  ref={mail} className="form-control" name="email" placeholder="email"/>
          </div>
          
          <div  className="mb-3">
           <label htmlFor="password" className="form-label">Password</label>
           <input type="password" ref={passw} className="form-control" name="password" placeholder="password"/>
          </div>
          <button className="btn btn-sm btn-success">Sign Up</button>
      </form>
  </div>

</div>


    </div>
  )
}

export default Signup