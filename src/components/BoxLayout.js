import React from 'react';
import BoxList from './BoxList';

const BoxLayout = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  width,
  height,
  background,
  borderColor,
  borderWidth,
  borderRadius,
  Text,
}) => {
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
    Text: {Text},
  };

  return (
    <div className="" style={styleBox}>
      <BoxList Text={Text}/>
    </div>
  );
};

export default BoxLayout;
