import propTypes from "prop-types";

const SuccessMessage = ({ message }) => {
  return (
    <div className="alert alert-success" role="alert">
      Success: {message}
    </div>
  );
};

export default SuccessMessage;

SuccessMessage.propTypes = {
  message: propTypes.string,
};
