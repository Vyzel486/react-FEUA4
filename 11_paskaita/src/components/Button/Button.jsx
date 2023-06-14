import "./Button.scss";

const Button = ({ className, children, ...props }) => {
  return (
    <button className={`styled-button ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
