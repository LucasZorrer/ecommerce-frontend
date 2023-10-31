import { useParams } from "react-router-dom";
import "./productDetails.css";
import { useEffect, useState } from "react";
import { apiMain } from "../../helpers/axiosClient";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const path = import.meta.env.VITE_MAIN_SERVER;
  const imageLink = `http://${path}/${product.image}`;

  useEffect(() => {
    apiMain.get(`/listProducts/${productId}`).then((response) => {
      if (response.data.success) {
        setProduct(response.data.product);
      }
    });
  }, [productId]);

  return (
    <div className="product-details-container">
      <div className="product-content">
        <div className="image-container">
          <img src={imageLink} alt="" />
        </div>
        <div className="description-container">
          <h1>{product.name}</h1>
          <strong>
            R$ <span>{product.price}</span>
          </strong>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
