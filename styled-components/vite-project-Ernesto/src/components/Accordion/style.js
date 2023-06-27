import { styled } from "styled-components";

export const StyledAccordionWrapper = styled.div`
  max-width: 700px;
`;

export const StyledAcordionHeader = styled.h2`
  max-width: 700px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border: 1px solid #212529;
  padding: 16px 20px;
  background-color: ${({ isExpanded }) => (isExpanded ? "#031633" : "initial")};
  color: ${({ isExpanded }) => (isExpanded ? "#6ea8fe" : "initial")};

  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.theme.palette[props.color].light};
    box-shadow: 0 0 10px #6ea8fe;
  }
`;

export const StyledAccordionCollapse = styled.div`
  max-width: 700px;
  border: 1px solid #212529;
  padding: 16px 20px;
`;
