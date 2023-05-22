import PropTypes from 'prop-types';
import '../App.css';

const Button = ({title, variant}) => {
    let buttonClass = '';

    switch (variant) {
        case 'text':
        buttonClass = 'text';
        break;
        case 'contained':
        buttonClass = 'contained';
        break;
        case 'outlined':
        buttonClass = 'outlined';
        break;
        default:
        buttonClass = 'default';
    }

  return (
    <button className={`${buttonClass}`}>{title}</button>
  );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['text', 'contained', 'outlined']).isRequired,
}

export default Button