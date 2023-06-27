import { styled } from "styled-components";

export const StyledCardWrapper = styled.div`
  background-color: ${(props) => {
    if (props.color === "primary") {
      return "#0D6EFD";
    } else if (props.color === "info") {
      return "#0DCAF0";
    } else if (props.color === "success") {
      return "#198754";
    } else if (props.color === "secondary") {
      return "#6D757C";
    } else if (props.color === "danger") {
      return "#DC3444";
    } else if (props.color === "warning") {
      return "#FEC106";
    } else if (props.color === "light") {
      return "#F4F7F9";
    } else if (props.color === "dark") {
      return "#202528";
    }
  }};

  color: ${(props) => {
    if (props.color === "primary") {
      return "white";
    } else if (props.color === "info") {
      return "black";
    } else if (props.color === "success") {
      return "white";
    } else if (props.color === "secondary") {
      return "white";
    } else if (props.color === "danger") {
      return "white";
    } else if (props.color === "warning") {
      return "black";
    } else if (props.color === "light") {
      return "black";
    } else if (props.color === "dark") {
      return "white";
    }
  }};

  width: ${(props) => {
    if (props.color === "primary") {
      return "300px";
    } else if (props.color === "info") {
      return "300px";
    } else if (props.color === "success") {
      return "300px";
    } else if (props.color === "secondary") {
      return "300px";
    } else if (props.color === "danger") {
      return "300px";
    } else if (props.color === "warning") {
      return "300px";
    } else if (props.color === "light") {
      return "300px";
    } else if (props.color === "dark") {
      return "300px";
    }
  }};

  margin: ${(props) => {
    if (props.color === "primary") {
      return "10px";
    } else if (props.color === "info") {
      return "10px";
    } else if (props.color === "success") {
      return "10px";
    } else if (props.color === "secondary") {
      return "10px";
    } else if (props.color === "danger") {
      return "10px";
    } else if (props.color === "warning") {
      return "10px";
    } else if (props.color === "light") {
      return "10px";
    } else if (props.color === "dark") {
      return "10px";
    }
  }};

  border-radius: ${(props) => {
    if (props.color === "primary") {
      return "8px";
    } else if (props.color === "info") {
      return "8px";
    } else if (props.color === "success") {
      return "8px";
    } else if (props.color === "secondary") {
      return "8px";
    } else if (props.color === "danger") {
      return "8px";
    } else if (props.color === "warning") {
      return "8px";
    } else if (props.color === "light") {
      return "8px";
    } else if (props.color === "dark") {
      return "8px";
    }
  }};
`;

export const StyledCardHeaderContainer = styled.div`
  padding: ${(props) => {
    if (props.color === "primary") {
      return "1rem";
    } else if (props.color === "info") {
      return "1rem";
    } else if (props.color === "success") {
      return "1rem";
    } else if (props.color === "secondary") {
      return "1rem";
    } else if (props.color === "danger") {
      return "1rem";
    } else if (props.color === "warning") {
      return "1rem";
    } else if (props.color === "light") {
      return "1rem";
    } else if (props.color === "dark") {
      return "1rem";
    }
  }};
`;

export const StyledCardHeader = styled.h5`
  font-size: ${(props) => {
    if (props.color === "primary") {
      return "16px";
    } else if (props.color === "info") {
      return "16px";
    } else if (props.color === "success") {
      return "16px";
    } else if (props.color === "secondary") {
      return "16px";
    } else if (props.color === "danger") {
      return "16px";
    } else if (props.color === "warning") {
      return "16px";
    } else if (props.color === "light") {
      return "16px";
    } else if (props.color === "dark") {
      return "16px";
    }
  }};
`;

export const StyledDivider = styled.div`
  background-color: ${(props) => {
    if (props.color === "primary") {
      return "#3487FB";
    } else if (props.color === "info") {
      return "#34d0f1";
    } else if (props.color === "success") {
      return "#339b6a";
    } else if (props.color === "secondary") {
      return "#838A93";
    } else if (props.color === "danger") {
      return "#DF5764";
    } else if (props.color === "warning") {
      return "#f9d76f";
    } else if (props.color === "light") {
      return "#dee1e2";
    } else if (props.color === "dark") {
      return "#44484D";
    }
  }};

  height: ${(props) => {
    if (props.color === "primary") {
      return "1px";
    } else if (props.color === "info") {
      return "1px";
    } else if (props.color === "success") {
      return "1px";
    } else if (props.color === "secondary") {
      return "1px";
    } else if (props.color === "danger") {
      return "1px";
    } else if (props.color === "warning") {
      return "1px";
    } else if (props.color === "light") {
      return "1px";
    } else if (props.color === "dark") {
      return "1px";
    }
  }};
`;

export const StyledCardContentContainer = styled.div`
  padding: ${(props) => {
    if (props.color === "primary") {
      return "1rem";
    } else if (props.color === "info") {
      return "1rem";
    } else if (props.color === "success") {
      return "1rem";
    } else if (props.color === "secondary") {
      return "1rem";
    } else if (props.color === "danger") {
      return "1rem";
    } else if (props.color === "warning") {
      return "1rem";
    } else if (props.color === "light") {
      return "1rem";
    } else if (props.color === "dark") {
      return "1rem";
    }
  }};
`;

export const StyledCardContentHeader = styled.h4`
  font-size: ${(props) => {
    if (props.color === "primary") {
      return "24px";
    } else if (props.color === "info") {
      return "24px";
    } else if (props.color === "success") {
      return "24px";
    } else if (props.color === "secondary") {
      return "24px";
    } else if (props.color === "danger") {
      return "24px";
    } else if (props.color === "warning") {
      return "24px";
    } else if (props.color === "light") {
      return "24px";
    } else if (props.color === "dark") {
      return "24px";
    }
  }};

  padding-bottom: ${(props) => {
    if (props.color === "primary") {
      return "10px";
    } else if (props.color === "info") {
      return "10px";
    } else if (props.color === "success") {
      return "10px";
    } else if (props.color === "secondary") {
      return "10px";
    } else if (props.color === "danger") {
      return "10px";
    } else if (props.color === "warning") {
      return "10px";
    } else if (props.color === "light") {
      return "10px";
    } else if (props.color === "dark") {
      return "10px";
    }
  }};
`;

export const StyledCardContentParagraph = styled.p`
  font-size: ${(props) => {
    if (props.color === "primary") {
      return "16px";
    } else if (props.color === "info") {
      return "16px";
    } else if (props.color === "success") {
      return "16px";
    } else if (props.color === "secondary") {
      return "16px";
    } else if (props.color === "danger") {
      return "16px";
    } else if (props.color === "warning") {
      return "16px";
    } else if (props.color === "light") {
      return "16px";
    } else if (props.color === "dark") {
      return "16px";
    }
  }};
`;
