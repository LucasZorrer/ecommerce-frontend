import "./button.css";

const Button = ({ name }) => {
  return (
    <div className="button-container">
      <button>{name}</button>
    </div>
  );
};

export default Button;
