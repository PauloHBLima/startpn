import React from 'react'

const BoxLayout = ({marginTop,marginBottom,marginLeft,marginRight,width,height,background,borderColor,borderWidth,borderRadius}) => {

  const styleBox = {
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    marginRight: marginRight,
    width: width,
    height: height,
    background: background,
    borderColor: borderColor,
    borderWidth: borderWidth,
    borderRadius: borderRadius,
  }

  return (
    <div className=''  style={styleBox}></div>
  )
}

export default BoxLayout