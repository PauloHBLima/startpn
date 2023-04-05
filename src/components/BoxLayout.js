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
  title,
  src,
  alt,
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
  };

  return (
    <div className="" style={styleBox}>
      <ul className="items-center ml-3 mr-3 text-sm text-[#787486]">
        {/* {title =! '' || title != undefined ?  : null} */}
        <h1 className='text-title-titleblack font-poppins text-base leading-5 font-medium pt-5 pb-4 mb-8 border-zinc-950 mr-9 border-b-2 '>{title}</h1>
        {Text?.map((itens) => (
          <BoxList Text={itens} />
          ))}
          
          <img className='' src={src} alt={alt}/>
      </ul>
    </div>
  );
};

export default BoxLayout;
