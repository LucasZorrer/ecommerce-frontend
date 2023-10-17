import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Links from "../../components/Links/Links";
import { useStateContext } from "../../contexts/ContextProvider";
import "./createProduct.css";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const CreateProduct = () => {
  const { token } = useStateContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setProductImage(URL.createObjectURL(file));
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();
  };

  return (
    <div className="createProduct-container">
      {" "}
      <Header />
      <Links />
      <div className="product-form">
        <form onSubmit={handleCreateProduct}>
          {" "}
          <Input
            name={"Name"}
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            name={"Description"}
            type={"text"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="categories">
            <label htmlFor="categories">Category</label>
            <select id="categories" name="categories">
              <option value="-1">Select</option>
            </select>
          </div>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <div className="imageContainer">
            {productImage != "" ? <img src={productImage} /> : <p></p>}
          </div>
          <Button name={"Create Product"} isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
