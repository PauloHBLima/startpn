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
    Text: Text,
  };

  console.log(styleBox)
  return (

    <div className=""  style={styleBox}>
    {/*   {Text.map(itens => (
        
        <BoxList key={itens.id} Text={itens} />
      ))} */}
      {Text}
    </div> 
      
  );
};

export default BoxLayout;
