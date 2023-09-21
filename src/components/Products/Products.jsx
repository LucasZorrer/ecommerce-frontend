import Product from "../Product/Product";
import "./products.css";

const Products = () => {
  return (
    <div className="container">
      <div className="categories-container">
        <div>
          <p>PRODUTOS EM DESTAQUE</p>
        </div>
        <div>
          <select name="" id="">
            <option value="selecione">SELECIONE</option>
            <option value="selecione">SELECIONE</option>
            <option value="selecione">SELECIONE</option>
          </select>
        </div>
      </div>
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
