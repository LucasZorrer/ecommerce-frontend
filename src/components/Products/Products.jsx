import { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./products.css";
import { apiMain } from "../../helpers/axiosClient";

const Products = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    apiMain
      .get(`/listProducts`)
      .then((response) => {
        if (response.data.success) {
          setProducts(response.data.products);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        {products !== null
          ? products.map((product) => (
              <Product
                showCart={false}
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Products;
