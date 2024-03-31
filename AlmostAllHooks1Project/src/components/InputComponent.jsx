import PropTypes from 'prop-types'
import { forwardRef, useImperativeHandle, useRef } from "react";


const InputComponent = forwardRef(function InputComponent(props, ref) {
  const inputRef = useRef()
  const { label, value, onChange } = props;

  useImperativeHandle(ref,() => ({
    changeFocus: () =>  inputRef.current.focus()
  }))

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return <input ref={inputRef} placeholder={label} value={value} onChange={handleChange} />;
})

InputComponent.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.function
}

export default InputComponent
