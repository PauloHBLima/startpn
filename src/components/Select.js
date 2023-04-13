import React from 'react';

const Select = (
 {type,
  placeholder,
  padding,
  nomeLabel,
  color,
  borderRadius,
  border,
  background,
  width,
  height,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  fontFamily,
}) => {
  const styleSelect = {
    padding: padding,
    color: color,
    borderRadius: borderRadius,
    border: border,
    background: background,
    width: width,
    height: height,
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    marginRight: marginRight,
    fontFamily: fontFamily,
  };

  return (
    <div>

      <label className="block mb-2">{nomeLabel}</label>
      <select
        type={type}
        placeholder={placeholder}
        className="focus:outline-0 flex border-2 h-1/2 p-1 rounded-xl mr-12"
        style={styleSelect}
        width={width}
      >
        <option value="exemplo">Playbook de vendas</option>
        <option value="exemplo">exemplo 2</option>
      </select>
    </div>
  );
};

export default Select;
