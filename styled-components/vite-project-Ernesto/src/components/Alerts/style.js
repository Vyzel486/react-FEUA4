import { styled } from "styled-components";

export const StyledAlertWrapper = styled.div`
  padding: 1rem;
  border-radius: 0.375rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: ${(props) => props.theme.palette[props.color].dark};
  color: ${(props) => props.theme.palette[props.color].light};
`;
