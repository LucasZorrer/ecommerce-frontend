import "./input.css";

// eslint-disable-next-line react/prop-types
const Input = ({ name, type, value, onChange }) => {
  return (
    <div className="input-container">
      <div className="content">
        <label htmlFor={name}>{name}:</label>
        <input
          type={type}
          id={name}
          placeholder={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
