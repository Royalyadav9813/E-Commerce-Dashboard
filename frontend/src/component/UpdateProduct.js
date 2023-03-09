import React, { useEffect } from "react";
import { useState } from "react";
import {useParams} from "react-router-dom"
const UpdateProduct=()=>{
  const[name,setName]=useState('');
  const[brand,setBrand]=useState('');
  const[price,setPrice]=useState('');
  const[category,setCategory]=useState('');
  const params=useParams();
  useEffect(()=>{
      getProductDetails(); 
       
  },[])
  const getProductDetails=async()=>{
      // console.log(params);

    let result= await fetch(`http://localhost:5000/product/${params.id}`)
    result=await result.json();
   
    setName(result.name);
    setBrand(result.brand);
    setPrice(result.price);
    setCategory(result.category);

  }
  const updateProduct= async()=>{
      console.log(name,brand,price,category);
  }
  
return (
  <>
  {/* <div className="update-product">
    
    <h1 style={{marginRight:630}}>Update Product</h1>
      <input type="text" className="inputBox" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter the name" />
      <input type="text" className="inputBox" value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder="Enter the brand" />

      <input type="text" className="inputBox" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter the price" />

      <input type="text" className="inputBox" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter the category" />
    <button className='button' onClick={updateProduct} type='button'>Update </button>

    
  </div> */}
  <div className="register">
    <h1>Update Product</h1>
  <form>
    <div className="row">
      <div className="col-25">
        <label>Product:</label>
      </div>
      <div className="col-75">
        <input type="text" value={name}onChange={(e)=>setName(e.target.value)} placeholder="Enter the product name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label>Brand:</label>
      </div>
      <div className="col-75">
        <input type="text" value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder="Enter the brand.."/>
      </div>
    </div>
       <div className="row">
      <div className="col-25">
        <label>Price:</label>
      </div>
      <div className="col-75">
        <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter the price.."/>
      </div>
    </div>
       <div className="row">
      <div className="col-25">
        <label>Category:</label>
      </div>
      <div className="col-75">
        <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter the category.."/>
      </div>
    </div>
    <div class="row">
  <button className='button' type='button' onClick={updateProduct}>Update</button>
    </div>
    
  </form>

</div>
  </>
)
}
export default UpdateProduct;

