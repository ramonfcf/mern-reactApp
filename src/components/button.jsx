import PropTypes from 'prop-types';


const Button = ({ onClick }) => {
  return (
    <button type="submit" className="btn btn-primary" onClick={onClick}>
    Submit
  </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

