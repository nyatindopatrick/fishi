import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState(null);
  useEffect(() => {
    loadCart();
  }, []);
  const loadCart = () => {
    const myCart = JSON.parse(localStorage.getItem("items"));
    return setCart(myCart);
  };

  const getPrice = () => {
    let prices = 0;
    cart && cart.map(item => (prices += +item.price * +item.quantity));
    return prices;
  };

  const deteleItem = data => {
    const myCart = JSON.parse(localStorage.getItem("items"));
    const newData = myCart.filter(item => item.title !== data.title);
    localStorage.setItem("items", JSON.stringify(newData));
    return loadCart();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    const myCart = JSON.parse(localStorage.getItem("items"));
    // eslint-disable-next-line array-callback-return
    myCart.map(item => {
      if (item.title === name) {
        item.quantity = value;
      }
    });
    localStorage.setItem("items", JSON.stringify(myCart));
    return loadCart();
  };
  console.log(cart);

  return (
    <div className="container h-100">
      <div className="card">
        <div className="card-header bg-dark text-light">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          Your Items &nbsp;
          <Link to="/" className="btn btn-outline-info btn-sm pull-right">
            Continue Shopping
          </Link>
          <div className="clearfix"></div>
        </div>
        <div className="card-body">
          {cart &&
            cart.map((item, i) => {
              const { image, title, price, quantity } = item;
              return (
                <div key={i}>
                  <div className="row">
                    <div className="col-xs-2 col-md-2">
                      <img
                        className="img-responsive w-100"
                        src={
                          image.slice(0, 4) === "http"
                            ? image
                            : require(`../../static/images/${image}`)
                        }
                        alt="prewiew"
                      />
                    </div>
                    <div className="col-xs-4 col-md-6">
                      <h4 className="product-name">
                        <strong>{title}</strong>
                      </h4>
                      <h4>{/* <small>Product description</small> */}</h4>
                    </div>
                    <div className="col-xs-6 col-md-4 row">
                      <div
                        className="col-xs-6 col-md-6 text-right"
                        style={{ paddingTop: "5px" }}
                      >
                        <h6>
                          <strong>
                            {`Ksh.${price}`}{" "}
                            <span className="text-muted px-3">x</span>
                          </strong>
                        </h6>
                      </div>
                      <div className="col-xs-4 col-md-4">
                        <input
                          type="number"
                          className="form-control input-sm"
                          onChange={handleChange}
                          name={title}
                          value={quantity}
                        />
                      </div>
                      <div className="col-xs-2 col-md-2">
                        <button
                          onClick={() => deteleItem(item)}
                          type="button"
                          className="btn btn-outline-danger btn-xs"
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          <div className="d-flex">
            <h3>TOTAL</h3>
            <h4 className="text-right ml-auto pr-5">{`Ksh.${getPrice()}`}</h4>
          </div>
        </div>
        <div className="card-footer">
          <Link to="/#" className="btn btn-success pull-right">
            Checkout
          </Link>
        </div>
      </div>     
    </div>
  );
}
