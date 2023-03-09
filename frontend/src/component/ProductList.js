import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
export default function ProductList() {
  const[products,setProducts]=useState([]);
  useEffect(()=>{
       getProducts();
  },[])
  const getProducts= async()=>{
    let result= await fetch('http://localhost:5000/products');
    result=await result.json();
    setProducts(result);
  }
  const deleteProduct=async(id)=>{
    let result=await fetch(`http://localhost:5000/product/${id}`,{
      method:'delete'
    })
    result=await result.json();
    if(result){
      getProducts();
    }
  }
  
  return (
   
    <div>
    <h1>Product List</h1>
  <table>
    <thead>
    <tr>
    <th>S.No</th>
      <th>Name</th>
      <th>Brand</th>
      <th>Price</th>
      <th>Category</th>
      <th>Operation1</th>
      <th>Operation2</th>
    </tr>
     
    </thead>
    <tbody>
      
        {
        
         products.map((item,index)=>
         <tr>
         <td>{index+1}</td>
         <td>{item.name}</td>
         <td>{item.brand}</td>
         <td>{item.price}</td>
         <td>{item.category}</td>
          <td><button className='delete-button'onClick={()=>deleteProduct(item
         ._id)}>Delete</button></td>  
          <td><Link to={`/update/${item._id}`}><button className='update-button'>Update</button></Link></td>
         </tr>

         
         )
        
        }
     
    </tbody>
 
  </table>
</div>
  )
}



