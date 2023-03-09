import './App.css';
import Nav from './component/Nav';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Footer from './component/Footer';
import Register from './component/Register';
import Login from './component/Login';
import PrivateComponent from './component/privateComponent';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    < Nav/>
    <Routes>
      <Route element={<PrivateComponent/>}>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/add" element={<AddProduct/>}/>
      <Route path="/update/:id" element={<UpdateProduct/>}/>
      <Route path="/logout" element={<h1>Logout item</h1>}/>
      <Route path="/profile" element={<h1>Profile item</h1>}/>
      </Route>   
      <Route path="/signup" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
    </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
