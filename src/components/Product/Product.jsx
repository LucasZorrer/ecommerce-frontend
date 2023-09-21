import "./product.css";
const Product = () => {
  return (
    <div className="product-container">
      <div className="img-container">
        <img
          src="https://m.media-amazon.com/images/I/41Guxdfui2L._AC._SR180,230.jpg"
          alt=""
        />
      </div>
      <div className="product-info">
        <p>Notebook</p>
      </div>
    </div>
  );
};

export default Product;
