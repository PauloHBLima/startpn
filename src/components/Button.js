import React from 'react'

const Button = ({name,onClick,width,height,background,color,borderRadios,marginTop,
marginRight,marginLeft,border,outLine}) => {
  
  const styleButton = {
    width: width,
    height: height,
    background: background,
    color: color,
    borderRadios: borderRadios,
    marginTop: marginTop,
    marginRight: marginRight,
    marginLeft: marginLeft,
    border: border,
    outLine: outLine
  }
  
  return (
    <Button classname="btnFinish" onClick={onClick} style={styleButton}>{name}</Button>
  )
}

export default Button