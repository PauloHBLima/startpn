import React from 'react';
import Imagem from './Imagem';

const Input = ({
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
  fontFamily
}) => {
  const styleInput = {
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
      <span className="flex border w-90 h-1/3 p-1 rounded-xl mr-12 ">
        <input
          type={type}
          placeholder={placeholder}
          style={styleInput}
          borderRadius={borderRadius}
          fontFamily={fontFamily}
        />
        {possuiItem ? <Imagem /> : null}
      </span>
    </div>
  );
};

export default Input;

/* '1px solid #D7D7D7' */
