import { Modal } from "antd";
import React from "react";
import "./styles/product.css";

export default function App({ modals, setModals, modalData }) {
  const handleOk = () => {
    setModals({
      ...modals,
      confirmLoading: true
    });
    setTimeout(() => {
      setModals({
        ...modals,
        visible: false,
        confirmLoading: false
      });
    }, 500);
  };

  const handleCancel = () => {
    setModals({
      ...modals,
      visible: false
    });
  };
  const { visible, confirmLoading } = modals;
  const { title, image, price, description } = modalData;
  return (
    <div>
      <Modal
        title="Title"
        visible={visible}
        onCancel={handleCancel}
        className={{ width: "80vw !important" }}
      >
        <div>
          <div class="card card-padded">
            <div class="container-fliud">
              <div class="wrapper row">
                <div class="preview col-md-6">
                  <div class="preview-pic tab-content">
                    <div class="tab-pane active" id="pic-1">
                      <img
                        src={
                          image && image.slice(0, 4) === "http"
                            ? image
                            : image && require(`../../static/images/${image}`)
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="details col-md-6">
                  <h3 class="product-title">{title}</h3>
                  <div class="rating">
                    <div class="stars">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </div>
                  </div>
                  <p class="product-description">{description}</p>
                  <h4 class="price">
                    current price: <span>{`Ksh.${price}`}</span>
                  </h4>
                  <h5 class="sizes">Sizes:</h5>

                  <h5 class="colors">Age:</h5>
                  <div class="action">
                    <button
                      class="add-to-cart btn btn-default mr-4"
                      type="button"
                      onClick={handleOk}
                    >
                      Add to cart
                    </button>
                    <button class="like btn btn-default ml-3" type="button">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
