import "./AsideOption.css";

const AsideOption = ({ title, icon: Icon }) => {
  return (
    <div className="aside-option">
      <div className="icon-option">
        <Icon size={36} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default AsideOption;
