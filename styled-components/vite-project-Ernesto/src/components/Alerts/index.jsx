import { StyledAlertWrapper } from "./style";
import PropTypes from "prop-types";

const Alerts = ({ title, color }) => {
  return <StyledAlertWrapper color={color}>{title}</StyledAlertWrapper>;
};

Alerts.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Alerts;
