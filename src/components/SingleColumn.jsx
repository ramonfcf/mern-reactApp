import propTypes from "prop-types";

const SingleColumn = ({ children }) => {
  return (
    <div className=" d-flex align-items-center justify-content-center font-sans gap-3">
      <div className="w-100">{children}</div>
    </div>
  );
};

export default SingleColumn;

SingleColumn.propTypes = {
  children: propTypes.node.isRequired,
};
