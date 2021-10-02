import React from "react"
// componente input genérico
class InputPadrao extends React.Component {

  render() {
    const { name, description, id, value, handleChange, type } = this.props;
    return (
      <>
        <label htmlFor={name}>
          {description}
          <input name={name} 
          id={id} value={value}
          type={type}
          onChange={handleChange}
          />
        </label>
      </>
    );
  }
}

export default InputPadrao;