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
      <div className="info-container">
        <div className="product-info">
          <p>Notebook</p>
          <strong>
            R$<span>150,00.</span>
          </strong>
        </div>
        <div className="cart-container">
          <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" />
        </div>
      </div>
    </div>
  );
};

export default Product;
