import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "../Components/Pages/Home";
import ProductDetails from "../Components/Pages/ProductDetails";

const CustomRoutes = () => {

    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
        </Routes>
        </>
    )
}

export default CustomRoutes;
