import React from 'react'
import EditItem from './EditItem';

const CardEdit = ({
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
  scrollbar,
  src,
  Text
}) => {

    const styleCardEdit = {
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
      scrollbar: scrollbar,
      src: src
    };
  

  return (
    <div className="scrollbar-thin scrollbar-thumb-custom-cinzaEscuroScroll scrollbar-track-custom-cinzaScroll overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-sm text-[#787486] cursor-pointer rounded-lg bg-white border-2 border-borda-bordaCinzaClaro" style={styleCardEdit}>
    <ul className=''>
        <EditItem src={src} />
    {Text?.map((itens) => (
          <EditItem Text={itens} />
        ))}
       
    </ul>
    </div>
  )
}


export default CardEdit;