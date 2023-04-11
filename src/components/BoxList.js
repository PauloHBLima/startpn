import React from 'react'
import SidebarItem from './SidebarItem'
import Pen from '../images/svg/Pen.svg'
import Add from '../images/svg/add.svg'

const BoxList = ({Text,marginLeft,marginTop,marginBottom,marginRight}) => {

    const StyleBoxList = {
      Text: Text,
      marginLeft: marginLeft,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginRight: marginRight
    }

    return (
        <li className='flex mb-2 hover:bg-cinzaHover-cinzaClaro hover:text-azul-marinho rounded-lg p-2' key={Text.id} style={StyleBoxList}>
        {Text === 'Adicionar outra categoria' ? <SidebarItem 
        src={Add}
        marginLeft=""/> : null}
        {Text}
        {Text === 'Playbook de vendas' ? <SidebarItem 
        src={Pen}
        marginLeft="15px"/> : null}
        </li>
      )
}

export default BoxList