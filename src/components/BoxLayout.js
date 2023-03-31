import React from 'react'

const BoxLayout = ({marginTop,marginBottom,marginLeft,marginRight,width,height}) => {

  const styleBox = {
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    marginRight: marginRight,
    width: width,
    height: height
  }

  return (
    <div className='bg-white rounded-xl border-2 border-borda-bordaCinzaClaro'  style={styleBox}>
    </div>
  )
}

export default BoxLayout