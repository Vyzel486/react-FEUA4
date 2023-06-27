import { styled } from "styled-components";
import PALETTE from "../../shared/theme/constants";

export const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 1px 1px rgba(0, 0, 0, 0.075);
  margin: 0.25rem 0.125rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.palette[props.color]?.main || ""};
  color: ${(props) =>
    props.color === PALETTE.warning ||
    props.color === PALETTE.info ||
    props.color === PALETTE.light
      ? props.theme.palette.dark.main
      : props.theme.palette.light.main};

  background-color: ${(props) =>
    props.outline ? "#ffffff" : props.theme.palette[props.color]?.main || ""};

  color: ${(props) =>
    props.outline
      ? props.theme.palette[props.color]?.main || ""
      : props.color === PALETTE.warning ||
        props.color === PALETTE.info ||
        props.color === PALETTE.light
      ? props.theme.palette.dark.main
      : props.theme.palette.light.main};

  border: ${(props) =>
    props.outline
      ? `1px solid ${props.theme.palette[props.color]?.main || ""}`
      : "none"};

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.theme.palette[props.color]?.light || ""};

    background-color: ${(props) =>
      props.outline ? props.theme.palette[props.color]?.main || "" : ""};

    color: ${(props) =>
      props.outline
        ? props.color === PALETTE.light.main || ""
          ? props.theme.palette.light.main
          : props.theme.palette.dark.main
        : ""};
  }
`;
