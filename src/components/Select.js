import React from 'react';

const Select = (
  type,
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
  possuiItem,
  fontFamily,
) => {
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
    nomeLabel: nomeLabel,
  };

  return (
    <div className="">
      <span className="flex border-2 h-1/2 p-1 rounded-xl mr-12 focus:border-4">
        <label className="block mb-2">{nomeLabel}</label>
        <select
          className="focus:outline-0"
          type={type}
          placeholder={placeholder}
          style={styleSelect}
          borderRadius={borderRadius}
          fontFamily={fontFamily}
          id='id'
          ></select>
      </span>
    </div>
  );
};

export default Select;
