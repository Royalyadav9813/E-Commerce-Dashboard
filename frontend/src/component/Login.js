import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate("");
  useEffect(()=>{
    const auth=localStorage.getItem("user");
    if(auth){
      navigate('/')
    }
  },[])
  const handleLogin= async()=>{
    let result= await fetch('http://localhost:5000/login',{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        'content-type':'application/json'
      }
    })
    result= await result.json();
    console.log(result);

    if(result.name)
    {
    localStorage.setItem("user",JSON.stringify(result));    
    navigate("/");
    }
    else
    {
      alert("Please enter the correct details");
    }

  }
    return(
      <>
      <div className="register">
    <h1>Login</h1>
  <form>
    <div className="row">
      <div className="col-25">
        <label>Email:</label>
      </div>
      <div className="col-75">
        <input type="text" value={email}onChange={(e)=>setEmail(e.target.value)} placeholder="Enter the email.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label>Password:</label>
      </div>
      <div className="col-75">
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter the password.."/>
      </div>
    </div>
    <div class="row">
  <button className='button' type='button' onClick={handleLogin}>Login</button>
    </div>
    
  </form>

</div>
      </>
     
    )
}
export default Login;