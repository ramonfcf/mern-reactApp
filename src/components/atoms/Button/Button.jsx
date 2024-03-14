import PropTypes from 'prop-types';


const Button = ({
  onClick,
  text,
  size = "large",
  color = "secondary",
  type = "normal",
}) => {
  const buttonSize = {
    small: "ms-2 btn-sm p-1",
    large: "",
  };

  const types = {
    normal: "btn text-white my-2 ",
    close: "btn-close",
    none: "",
  };

  const colors = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    success: "bg-success",
    danger: "bg-danger",
    warning: "bg-warning",
    info: "bg-info",
    light: "bg-light",
    dark: "bg-dark",
    none: "",
  };

  return (
    <button
      type="button"
      className={`${types[type]} ${colors[color]} ${buttonSize[size]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
};

