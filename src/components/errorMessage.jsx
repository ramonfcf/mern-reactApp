import propTypes from "prop-types";

const ErrorMessage = ({ error }) => {
  return (
    <div className="alert alert-danger" role="alert">
      Error: {error}
    </div>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  error: propTypes.string,
};
