import { Link } from "react-router-dom";
import "./links.css";

const linkStyle = {
  margin: 0,
  padding: 0,
};

const Links = () => {
  return (
    <div className="links-container">
      <div className="links">
        <div className="link">
          <Link style={linkStyle} to={"/"}>
            HOME
          </Link>
        </div>
        <div className="link">
          <a href="#">CATEGORIES</a>
        </div>
        <div className="link">
          <a href="#">PRODUCTS</a>
        </div>
        <div className="link">
          <a href="#">CONTACT</a>
        </div>
      </div>
    </div>
  );
};

export default Links;
