import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

const theme = {
  palette: {
    light: {
      light: "#f8f9fa",
      main: "#ffffff",
      dark: "#343A40",
    },
    dark: {
      light: "#dee2e6",
      main: "#212529",
      dark: "#212529",
    },
    primary: {
      light: "#6ea8fe",
      main: "#2B6EFD",
      dark: "#031633",
    },
    secondary: {
      light: "#a7acb1",
      main: "#6C757D",
      dark: "#161719",
    },
    success: {
      light: "#75b798",
      main: "#288754",
      dark: "#051B11",
    },
    danger: {
      light: "#ea868f",
      main: "#DC3545",
      dark: "#2C0B0E",
    },
    warning: {
      light: "#ffda6a",
      main: "#F9C108",
      dark: "#332701",
    },
    info: {
      light: "#6edff6",
      main: "#44CAEF",
      dark: "#032830",
    },
  },
  sizes: {
    font: {
      lg: "1.25em",
      md: "1em",
    },
  },
};

const ThemeProvider = ({ children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
);

export default ThemeProvider;
