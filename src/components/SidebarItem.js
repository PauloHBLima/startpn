import React from 'react'

const SidebarItem = ({img, src, alt, text}) => {

  const styleSideBarItem = {
    img: img,
    src: src,
    alt: alt,
    text: text
  };

  return (
    <div className="flex items-center bg-white text-sm text-[#787486] cursor-pointer rounded-lg mt-0 mr-3.5 mb-5 ">
      <img className='mr-5' src={img} alt={alt} text={text} style={styleSideBarItem} />
    </div>
  )
}

export default SidebarItem