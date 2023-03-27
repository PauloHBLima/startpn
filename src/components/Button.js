import React from 'react';

const Button = ({
  name,
  onClick,
  width,
  height,
  background,
  color,
  borderRadius,
  marginTop,
  marginRight,
  marginLeft,
  border,
  outLine,
  fontFamily,
  fontSize,
  fontStyle,
  lineHeight,
}) => {
  const styleButton = {
    width: width,
    height: height,
    background: background,
    color: color,
    borderRadius: borderRadius,
    marginTop: marginTop,
    marginRight: marginRight,
    marginLeft: marginLeft,
    border: border,
    outLine: outLine,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontStyle: fontStyle,
    lineHeight: lineHeight,
  };

  return (
    <button classname="btnFinish" onClick={onClick} style={styleButton}>
      {name}
    </button>
  );
};

export default Button;
