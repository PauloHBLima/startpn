import React from 'react';
import BoxList from './BoxList';
import Button from './Button';



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
  scrollbar,
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
    scrollbar: scrollbar,
  };

  return (
    <div
      className="h-32 scrollbar-thin scrollbar-thumb-custom-cinzaEscuroScroll scrollbar-track-custom-cinzaScroll overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      style={styleBox}
    >
      <ul className="h-[650px] items-center ml-3 mr-3 font-poppins text-sm leading-6 font-medium text-[#787486]">
        
          <h1 className="text-title-titleblack font-poppins text-base leading-5 font-medium pt-5 pb-4 mb-8 border-zinc-950 mr-9 border-b-2 ">
            {title}
            {title !== "Categorias" ? 
              <Button
                name="Editar"
                color="#FFFFFF"
                background="#476EE6"
                width="102px"
                height="35px"
                borderRadius="60px"
                marginLeft="520px"
                fontFamily="Poppins"
                fontStyle="semibold"
                fontSize="15px"
                lineHeight="24px"
              />
             : null}
          </h1>
        {Text?.map((itens) => (
          <BoxList Text={itens} />
        ))}
      </ul>
      <div>
      
      </div>
    </div>
  );
};

export default BoxLayout;
