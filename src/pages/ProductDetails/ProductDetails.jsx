import { useParams } from "react-router-dom";
import "./productDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div className="product-details-container">
      <div className="product-content">
        <div className="image-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcTkhF9hEJ-5APw0CLMYc6qqco4hEAA76AQ&usqp=CAU" alt="" />
        </div>
        <div className="description-container">
          <h1>Gatinho Fofinho</h1>
          <strong>
            R$ <span>150</span>
          </strong>
          <p>Descrição</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
