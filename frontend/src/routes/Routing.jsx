import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/Product/ProductDetail";
import { FilterProductDetailPage } from "../pages/Product/filterProductPage/FilterProductDetailPage";
import Cart from "../pages/Cart";
import SearchProduct from "../components/Product/SearchProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CheckOut from "../pages/CheckOut";
import Order from "../pages/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CtegoryDetail from "../pages/CtegoryDetail";
import AllProduct from "../components/Product/AllProduct";

const Routing = () => {
  const location = useLocation();
  return (
    <>

        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='product-detail/:id' element={<ProductDetail />} />
          <Route path='filter-page/:id' element={<FilterProductDetailPage />} />
          <Route path='sign-up' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='cart' element={<Cart />} />
          <Route path='CheckOut' element={<CheckOut />} />
          <Route path='payment/:id' element={<Order/>} />
          <Route path="categoryDetail/:id" element={<CtegoryDetail/>}/>
          <Route path="all-product" element={<AllProduct/>} />
          <Route path="search_result" element={<SearchProduct/>} />
            {/* <Route path="product-detail/:id" element={<ProductDetail/>}/> */}
        
        </Routes>
        <ToastContainer />
  
    </>
  );
};

export default Routing;
