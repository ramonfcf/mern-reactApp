import propTypes from "prop-types";

const Input = ({ type, value, onChange, label, placeholder }) => {
  return (
    <div className="form-group py-2">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  type: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired
};
