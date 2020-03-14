import React, { useState, useEffect } from "react";
import ProductsData from "./ProductCode";
import { products } from "./productsData";

export default function Products(props) {
  useEffect(() => {
    loadData(window.location.href);
  }, []);
  const [items, setItems] = useState([]);

  const loadData = data => {
    let prod = [];
    products.map(item => {
      if (
        data.includes("fingerlings") &&
        item.title.toLowerCase().includes("fingerlings")
      ) {
        prod.push(item);
      } else if (
        data.includes("feeds") &&
        item.title.toLowerCase().includes("feeds")
      ) {
        prod.push(item);
      } else if (
        data.includes("consultation") &&
        item.title.toLowerCase().includes("consultation")
      ) {
        prod.push(item);
      } else if (data.slice(data.length - 6, data.length - 1) === "oduct") {
        prod.push(item);
      }
      return setItems([...items, ...prod]);
    });
  };
  console.log(items);

  return (
    <div>
      <ProductsData data={items} />
    </div>
  );
}

let link = "https://products";
console.log(link.slice(link.length - 6, link.length - 1));
