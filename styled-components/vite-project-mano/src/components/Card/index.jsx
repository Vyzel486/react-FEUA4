import PropTypes from "prop-types";

import {
  StyledCardWrapper,
  StyledCardHeaderContainer,
  StyledCardHeader,
  StyledDivider,
  StyledCardContentContainer,
  StyledCardContentHeader,
  StyledCardContentParagraph,
} from "./style";

const Card = ({ color, title }) => {
  return (
    <StyledCardWrapper color={color}>
      <StyledCardHeaderContainer color={color}>
        <StyledCardHeader color={color}>Header</StyledCardHeader>
      </StyledCardHeaderContainer>
      <StyledDivider color={color}></StyledDivider>
      <StyledCardContentContainer color={color}>
        <StyledCardContentHeader color={color}>{title}</StyledCardContentHeader>
        <StyledCardContentParagraph color={color}>
          Some quick example text to build on the card title and make up the
          bulk of the card`s content.
        </StyledCardContentParagraph>
      </StyledCardContentContainer>
    </StyledCardWrapper>
  );
};

Card.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
