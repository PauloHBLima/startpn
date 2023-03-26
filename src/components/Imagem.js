import React from 'react'
import olhoInput from '../images/svg/olhosenha.svg'

const Imagem = (width,height ) => {

  const styleImage = {
    width: width,
    height: height,
  }

  return (
    <img src={olhoInput} style={styleImage} alt="" />
  )
}

export default Imagem