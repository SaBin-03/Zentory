"use client";

import React, { useState, useEffect } from "react";
import Options from "./Options";
import { productType } from "@/constants/data";
import PoductCard from "./PoductCard";
import axios from "axios";
import { div, h2 } from "motion/react-client";
import { Loader } from "lucide-react";

const ProductsGrid = () => {
  const [selectTab, setselectTab] = useState(productType[0]?.title || "");
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setloading(true);
        const response = await axios.get("/api/ProductDetails");
        if (response.data.success) {
          setproducts(response.data.details);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
    getData();
  }, [selectTab]);

  const filteredProducts = products.filter(
    (datum) => datum.category === selectTab,
  );

  return (
    <div>
      <Options selectedTab={selectTab} onTabSelect={setselectTab} />

      {loading ? (
        <div className=" h-50 mx-10 bg-gray-100 flex flex-col justify-center items-center">
            <Loader className="animate-spin" />
            <h2>Products loading...</h2>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 px-10">
          {filteredProducts.map((datu) => (
            <PoductCard key={datu.title} item={datu} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;
