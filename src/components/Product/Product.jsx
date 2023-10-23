import { ShoppingCart } from "@phosphor-icons/react";
import "./product.css";
// eslint-disable-next-line react/prop-types
const Product = ({ showCart = true, name, image, price }) => {

  console.log(image)
  return (
    <div className="product-container">
      <div className="img-container">
        <img
          src="https://m.media-amazon.com/images/I/41Guxdfui2L._AC._SR180,230.jpg"
          alt=""
        />
      </div>
      <div className="info-container">
        <div className="product-info">
          <p>{name}</p>
          <strong>
            R$<span>{price}.</span>
          </strong>
        </div>
        {showCart ? (
          <div className="cart-container">
            <ShoppingCart size={32} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Product;
