import React from 'react'

const BoxList = ({Text,marginLeft,marginTop,marginBottom,marginRight,src,alt}) => {
  
    const StyleBoxList = {
      Text: Text,
      marginLeft: marginLeft,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginRight: marginRight
    }
    
    return (
        <li className='mb-6 hover:bg-cinzaHover-cinzaClaro hover:text-azul-marinho rounded-lg p-2' key={Text.id} style={StyleBoxList}>
        {Text}
        </li>
      
  )
}

export default BoxList