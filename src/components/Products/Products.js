import React, { useState, useEffect } from "react";
import ProductsData from "./ProductCode";
import { products } from "./productsData";
import Modal from "./Modal";

export default function Products(props) {
  const [items, setItems] = useState([]);
  const [modals, setModals] = useState({
    visible: false,
    confirmLoading: false
  });
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    loadData(window.location.href);
  }, []);

  const showModal = data => {
    setModals({ ...modals, visible: true });
    setModalData(data);
  };

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
        item.title.toLowerCase().includes("consult")
      ) {
        prod.push(item);
      } else if (data.slice(data.length - 6, data.length - 1) === "oduct") {
        prod.push(item);
      }
      return setItems([...items, ...prod]);
    });
  };

  return (
    <div>
      <ProductsData showModal={showModal} data={items} />
      <Modal modals={modals} setModals={setModals} modalData={modalData} />
    </div>
  );
}
