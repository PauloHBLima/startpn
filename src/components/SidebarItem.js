import React from 'react';

const SidebarItem = ({ src, alt, Text, marginLeft }) => {
  const styleSideBarItem = {
    src: src,
    alt: alt,
    Text: Text,
    marginLeft: marginLeft,
  };

  return (
    <div className="flex items-center">
      <img
      className=''
        src={src}
        alt={alt}
        style={styleSideBarItem}
        marginLeft={marginLeft}
      />
      {Text}
    </div>
  );
};

export default SidebarItem;
