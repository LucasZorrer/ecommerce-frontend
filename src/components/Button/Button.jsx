import "./button.css";
import { TailSpin } from "react-loader-spinner";

const Button = ({ name, isLoading = false }) => {
  return (
    <div className="button-container">
      {isLoading ? (
        <TailSpin
          height="80%"
          width="100%"
          color="#000"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <button>{name}</button>
      )}
    </div>
  );
};

export default Button;
