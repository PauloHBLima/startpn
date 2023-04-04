import React from 'react';

const SidebarItem = ({ src, alt, Text, marginLeft }) => {
  const styleSideBarItem = {
    marginLeft: marginLeft,
    stroke: '#476EE6'
  };

  return (
    <div className="flex items-center">
      <img
      className='mr-4 '
        src={src}
        alt={alt}
        style={styleSideBarItem}
      />
      {Text}
    </div>
  );
};

export default SidebarItem;
