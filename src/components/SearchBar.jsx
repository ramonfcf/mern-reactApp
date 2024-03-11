import PropTypes from "prop-types";

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="input-group my-3">
      <span className="input-group-text">Search</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-control form-control-sm"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
