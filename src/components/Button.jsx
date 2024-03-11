import PropTypes from 'prop-types';


const Button = ({ onClick, text }) => {
  return (
    <button
      type="submit"
      className="btn bg-dark text-white my-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

