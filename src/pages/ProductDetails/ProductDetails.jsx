import { Minus, Plus, User } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiMain } from "../../helpers/axiosClient";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import "./productDetails.css";
import { useStateContext } from "../../contexts/ContextProvider";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { token } = useStateContext();
  const [feedbacks, setFeedbacks] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoadingComentary, setIsLoadingCommentary] = useState(false);
  const [addComment, setAddComment] = useState("");

  const path = import.meta.env.VITE_MAIN_SERVER;
  const imageLink = `http://${path}/${product.image}`;

  useEffect(() => {
    apiMain.get(`/listProducts/${productId}`).then((response) => {
      if (response.data.success) {
        setProduct(response.data.product);
      }
    });

    apiMain.get(`/getFeedbacks/${productId}`).then((response) => {
      if (response.data.success) {
        setFeedbacks(response.data.feedbacks);
      }
    });
  }, [productId]);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    setIsLoadingCommentary(true);
    await apiMain
      .post("/createFeedback", {
        comment: addComment,
        product_id: productId,
      })
      .then((data) => {
        setFeedbacks((prev) => [...prev, data.data.newFeedback]);
        toast.success("Feedback successfully added")
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoadingCommentary(false);
      });
  };

  return (
    <div className="product-details-container">
      <div className="product-content">
        <div className="image-container">
          <img src={imageLink} alt="" />
        </div>
        <div className="description-container">
          <h1>{product.name}</h1>
          <strong>
            $ <span>{product.price}</span>
          </strong>
          <div className="quantity">
            <label htmlFor="quantity">Quantity</label>
            <div id="quantity" className="quantity-container">
              <Minus size={32} onClick={handleMinus} />
              <input type="number" min={1} value={quantity} name="quantity" />
              <Plus size={32} onClick={handlePlus} />
            </div>
            <div className="button-div">
              <Button name={"ADD TO CART"} />
              <Button name={"PURCHASE"} />
            </div>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="feedbacks-container">
        <h1>Feedbacks</h1>
        {token ? (
          <div className="add-feedback-container">
            <p>Write a feedback about this product</p>
            <form onSubmit={handleAddComment}>
              <input
                type="text"
                onChange={(e) => setAddComment(e.target.value)}
                value={addComment}
              />
              <div className="button-div">
                <Button name={"SEND"} isLoading={isLoadingComentary} />
              </div>
            </form>
          </div>
        ) : null}
        {feedbacks
          ? feedbacks.map((feedback, index) => (
              <React.Fragment key={index}>
                <div className="header-comment">
                  <User size={32} />
                  <p>{feedback.user}</p>
                </div>
                <div className="comment-content">
                  <p>{feedback.comment}</p>
                </div>
              </React.Fragment>
            ))
          : null}
      </div>
    </div>
  );
};

export default ProductDetails;
