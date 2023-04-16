import React from 'react';

const EditItem = ({ src, alt, Text, marginLeft }) => {
  const styleEditItem = {
  };

  return (
    <li className="flex justify-center mb-20" key={Text}>
      <img 
        className='fixed w-[1070px]'
        src={src}
        alt={alt}
        style={styleEditItem}
        />
        {Text}
    </li>
  );
};

export default EditItem;
