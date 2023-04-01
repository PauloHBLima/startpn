import React from 'react'

const BoxList = ({Text,marginLeft,marginTop,marginBottom,marginRight}) => {
  
    const StyleBoxList = {
      Text: Text,
      marginLeft: marginLeft,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginRight: marginRight
    }
    
    return (
      <ul className='items-center ml-3 mt-3 text-sm text-[#787486]'>
        <li style={StyleBoxList}>
        {Text}
        </li>
      </ul>
  )
}

export default BoxList