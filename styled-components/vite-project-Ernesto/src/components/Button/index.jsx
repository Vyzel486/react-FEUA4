import { StyledButton } from "./style";

const Button = ({ color, outline, children }) => {
  return (
    <StyledButton color={color} outline={outline ? "true" : ""}>
      {children}
    </StyledButton>
  );
};

export default Button;
