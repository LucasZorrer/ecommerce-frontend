import { useEffect, useState } from "react";
import "./myproducts.css";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import { apiMain } from "../../helpers/axiosClient";
import Header from "../../components/Header/Header";
import Links from "../../components/Links/Links";
import Product from "../../components/Product/Product";

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
      <Header />
      <Links />
      <h1>My Products</h1>
      <button>Create a new Product</button>
      <div className="products">
        {products !== null
          ? products.map((product) => (
              <Product
                showCart={false}
                key={product.id}
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

export default MyProducts;
