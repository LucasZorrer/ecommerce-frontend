import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import "./createProduct.css";

import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { apiMain } from "../../helpers/axiosClient";

const CreateProduct = () => {
  const { token } = useStateContext();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [showImageSelected, setShowImageSelected] = useState();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    apiMain
      .get("/getCategories")
      .then((response) => {
        if (response.data.success) {
          setCategories(response.data.categories);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate, token]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setProductImage(file);
    setShowImageSelected(URL.createObjectURL(file));
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category_id", selectedCategory ?? null);
    formData.append("price", price ?? null);
    formData.append("quantity", quantity ?? null);
    formData.append("image", productImage);

    await apiMain
      .post("/createProduct", formData)
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/myproducts");
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="createProduct-container">
      <div className="product-form">
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          {" "}
          <h1>Create Product</h1>
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
          <Input
            name={"Quantity"}
            type={"number"}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Input
            name={"Price"}
            type={"number"}
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="categories">
            <label htmlFor="categories">Category:</label>
            <select
              id="categories"
              name="categories"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="-1">Select</option>
              {categories !== null
                ? categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <div className="input-file">
            <label htmlFor="image">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                name="image"
                id="image"
              />
              Get Product Image
            </label>
          </div>
          <div className="imageContainer">
            {showImageSelected != "" ? (
              <img src={showImageSelected} />
            ) : (
              <p></p>
            )}
          </div>
          <Button name={"Create Product"} isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
