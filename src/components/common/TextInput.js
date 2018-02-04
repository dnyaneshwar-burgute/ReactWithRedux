import React, {PropTypes} from 'react';
const TextInput = ({name, lable, onChange, placeHolder, value, error }) => {
	let wrapperClass='form-group';
	if (error && error.length > 0) {
		wrapperClass +="" + "has_error";
	}
  return(
    <div className={wrapperClass}>
      <label htmlFor={name}>{lable}</label>
      <div className='field'>
        <input 
          type="text"
          name={name}
          label={lable}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}/>
        {error && <div className='alert alert-danger'>{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
}

export default TextInput;