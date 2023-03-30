import React from 'react';

const SidebarItem = ({ src, alt, Text }) => {
  const styleSideBarItem = {
    src: src,
    alt: alt,
    Text: Text,
  };

  return (
    <div className="flex items-center bg-white text-sm text-[#787486] cursor-pointer rounded-lg mt-0 mr-3.5 mb-5 hover:bg-cinzaHover-cinzaClaro hover:text-azul-marinho">
      <img
        className="mr-5 cursor-pointer"
        src={src}
        alt={alt}
        style={styleSideBarItem}
      />
      {Text}
    </div>
  );
};

export default SidebarItem;
