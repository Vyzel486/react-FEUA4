import { useState } from "react";
import PropTypes from "prop-types";
import {
  StyledAccordionWrapper,
  StyledAcordionHeader,
  StyledAccordionCollapse,
} from "./style";

const Accordion = ({ color, title, description }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <StyledAccordionWrapper>
      {title.map((item, index) => (
        <div key={index}>
          <StyledAcordionHeader
            isExpanded={expandedIndex === index}
            color={color}
            onClick={() => toggleAccordion(index)}
            aria-expanded={expandedIndex === index}
          >
            {item}
          </StyledAcordionHeader>
          {expandedIndex === index && (
            <StyledAccordionCollapse>
              {description[index]}
            </StyledAccordionCollapse>
          )}
        </div>
      ))}
    </StyledAccordionWrapper>
  );
};

Accordion.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
};

export default Accordion;
