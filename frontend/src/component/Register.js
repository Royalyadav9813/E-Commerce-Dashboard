import React,{useState,useEffect} from 'react'
import {useNavigate} from'react-router-dom'
export default function Register() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
      const auth=localStorage.getItem("user");
      if(auth){
        navigate('/')
      }
    })
    const collectData=async()=>{
      let result= await fetch('http://localhost:5000/register',{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
          'content-type':'application/json'
        }
      })
      result=await result.json();
      console.log(result);
      localStorage.setItem("user",JSON.stringify(result));
      if(result){
        navigate('/');
         
      }
      
    }
  return (
   <>
    <div className="register">
    <h1>Register</h1>
  <form>
    <div className="row">
      <div className="col-25">
        <label>Name</label>
      </div>
      <div className="col-75">
        <input type="text" value={name}onChange={(e)=>setName(e.target.value)} placeholder="Enter the name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label>Email</label>
      </div>
      <div className="col-75">
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter the Email.."/>
      </div>
    </div>
       <div className="row">
      <div className="col-25">
        <label>Password</label>
      </div>
      <div className="col-75">
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter the password"/>
      </div>
    </div>
    <div class="row">
  <button className='button' type='button' onClick={collectData}>Sign Up</button>
    </div>
    
  </form>

</div>
   </>
   
  )
}
