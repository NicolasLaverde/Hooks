import { forwardRef, useImperativeHandle, useRef } from "react";

const InputComponent = (props, ref) => {
  const inputRef = useRef()
  const { label, value, onChange } = props;

  useImperativeHandle(ref,() => ({
    changeFocus: () =>  inputRef.current.focus()
  }))

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return <input ref={inputRef} placeholder={label} value={value} onChange={handleChange} />;
};

export default forwardRef(InputComponent)