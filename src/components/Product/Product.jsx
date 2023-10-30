import { ShoppingCart } from "@phosphor-icons/react";
import "./product.css";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Product = ({ showCart = true, name, image, price, id }) => {
  const navigate = useNavigate();
  const path = import.meta.env.VITE_MAIN_SERVER;
  const imageLink = `http://${path}/${image}`;

  const handleProductInformation = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="product-container" onClick={() => handleProductInformation(id)}>
      <div className="img-container">
        <img src={imageLink} alt="" />
      </div>
      <div className="info-container">
        <div className="product-info">
          <p>{name}</p>
          <strong>
            R$ <span>{price}</span>
          </strong>
        </div>
        {showCart ? (
          <div className="cart-container">
            <ShoppingCart size={32} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Product;
