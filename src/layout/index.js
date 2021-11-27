import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Product from "./product";
import Promotion from "./promotion";

export default function Layout() {
    return (
        <div>
            <Header/>
            <Carousel/>
            <Product/>
            <Promotion/>
        </div>
    )
}