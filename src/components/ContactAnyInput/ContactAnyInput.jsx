import PropTypes from 'prop-types';
import './ContactAnyInput.css';
import { Input } from '@chakra-ui/react';
const ContactAnyInput = ({
  type,
  name,
  pattern,
  title,
  handleChange,
  LableText,
}) => {
  return (
    <label htmlFor={name} className="ContactAnyInputLabel">
      {LableText}
      <Input
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required
        onChange={handleChange}
      ></Input>
    </label>
  );
};

export default ContactAnyInput;

ContactAnyInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  handleChange: PropTypes.func,
  LableText: PropTypes.string,
};
