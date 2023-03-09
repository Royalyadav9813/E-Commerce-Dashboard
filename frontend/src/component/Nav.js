import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
export default function Nav() {
  const navigate=useNavigate();
  const auth=localStorage.getItem("user");
  const logout=()=>{
    localStorage.clear();
    navigate('/signup');
  }
  return (
    <div>
    {
      auth?<ul className='nav-ul'>
        <li> <Link to="/">Product</Link></li>
        <li> <Link to="/add">Add Product</Link></li>
        <li> <Link to="/update">Update Product</Link></li>
        <li> <Link to="/profile">Profile</Link></li>
        <li> <Link to="/signup" onClick={logout}>Logout</Link></li>
        </ul>
        :
        <ul className='nav-ul  nav-logo'>
          <li><Link to="/signup">Sign Up</Link></li> 
          <li> <Link to="/login">Login</Link></li>
        </ul>
      
    }
    </div>
  )
}
