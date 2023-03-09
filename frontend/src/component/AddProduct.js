import React from "react";
import { useState } from "react";
export default function AddProduct() {
    const[name,setName]=useState("");
    const[brand,setBrand]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[error,setError]=useState(false);
    const handleUpdate= async()=>{
      // To check validation
      console.log(name
        ,brand,price,category);
        if(!name || !brand || !price || !category){
          setError(true);
          return false;
        }
        const user_id= JSON.parse(localStorage.getItem('user'))._id;
       let result=await fetch('http://localhost:5000/add-product',{
        method:'post',
        body:JSON.stringify({name,brand,price,category}),
        headers:{
            'content-type':'application/json'
        }
       })
       result= await result.json();
       console.log(result);
    }
  return (
    <>
    {/* <div className="add-product">
      
      <h1 style={{marginRight:660}}>Add Product</h1>
        <input type="text" className="inputBox" onChange={(e)=>setName(e.target.value)} placeholder="Enter the name" />
       {error && !name && <span className="invalid-input">Enter the valid name</span>} 
        <input type="text" className="inputBox" onChange={(e)=>setBrand(e.target.value)} placeholder="Enter the brand" />
       {error && !brand && <span className="invalid-input">Enter the valid brand</span>} 

        <input type="text" className="inputBox" onChange={(e)=>setPrice(e.target.value)} placeholder="Enter the price" />
       {error && !price && <span className="invalid-input">Enter the valid price</span>} 

        <input type="text" className="inputBox" onChange={(e)=>setCategory(e.target.value)} placeholder="Enter the category" />
       {error && !category && <span className="invalid-input">Enter the valid category</span>} 

      <button className='button' onClick={handleUpdate} type='button'>Add Product</button>

      
    </div> */}
    <div className="register">
    <h1>Add Product</h1>
  <form>
    <div className="row">
      <div className="col-25">
        <label>Product:</label>
      </div>
      <div className="col-75">
        <input type="text" value={name}onChange={(e)=>setName(e.target.value)} placeholder="Enter the product name.."/>
        {error && !name && <span className="invalid-input">Enter the valid name</span>} 
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label>Brand:</label>
      </div>
      <div className="col-75">
        <input type="text" value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder="Enter the brand.."/>
        {error && !brand && <span className="invalid-input">Enter the valid brand</span>} 
      </div>
    </div>
       <div className="row">
      <div className="col-25">
        <label>Price:</label>
      </div>
      <div className="col-75">
        <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter the price.."/>
        {error && !price && <span className="invalid-input">Enter the valid price</span>} 
      </div>
    </div>
       <div className="row">
      <div className="col-25">
        <label>Category:</label>
      </div>
      <div className="col-75">
        <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter the category.."/>
        {error && !category && <span className="invalid-input">Enter the valid category</span>} 
      </div>
    </div>
    <div class="row">
  <button className='button' type='button' onClick={handleUpdate}>Add Product</button>
    </div>
    
  </form>

</div>
    </>
  )
}
