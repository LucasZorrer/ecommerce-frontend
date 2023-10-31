import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Product from "../../components/Product/Product";
import { useStateContext } from "../../contexts/ContextProvider";
import { apiMain } from "../../helpers/axiosClient";
import "./myproducts.css";

const MyProducts = () => {
  const { token, user } = useStateContext();
  const navigate = useNavigate();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    apiMain
      .get(`/listPersonalProducts/${user.id}`)
      .then((response) => {
        if (response.data.success) {
          setProducts(response.data.products);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate, token, user]);

  return (
    <div className="myProducts">
      <h1>My Products</h1>
      <div className="productButton">
        <Link to={"/createProduct"}>CREATE A NEW PRODUCT</Link>
      </div>
      <div className="products">
        {products !== null
          ? products.map((product) => (
              <Product
                showCart={false}
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                id={product.id}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default MyProducts;
