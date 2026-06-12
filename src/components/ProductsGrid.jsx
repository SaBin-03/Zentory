"use client";

import React, { useState,useEffect } from "react";
import Options from "./Options";
import { productType } from "@/constants/data";
import PoductCard from "./PoductCard";
import axios from "axios";

const ProductsGrid = () => {
  const [selectTab, setselectTab] = useState(productType[0]?.title || "");
  const [products, setproducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/ProductDetails");
      if (response.data.success) {
        setproducts(response.data.details);
      }
    };
    getData();
  }, []);

  const filteredProducts = products.filter((datum) => datum.category === selectTab);

  return (
    <div>
      <Options selectedTab={selectTab} onTabSelect={setselectTab} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 px-10">
        {filteredProducts.map((datu) => (
            <PoductCard key={datu.title} item={datu} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
