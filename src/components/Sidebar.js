import React from 'react';
import SidebarItem from './SidebarItem';
import Playbooks from '../images/svg/Playbooks.svg';
import Logout from '../images/svg/Logout.svg';
import setting from '../images/svg/setting.svg';
import taskSquare from '../images/svg/taskSquare.svg';
import user from '../images/svg/user.svg';
import LogoStartpn from '../images/svg/LogoStartpn.svg';
import message from '../images/svg/message.svg';
import BoxLayout from './BoxLayout';

const Sidebar = () => {
  return (
    <div className="flex h-full">
      <ul className="items-center text-sm text-[#787486] cursor-pointer rounded-lg bg-white mr-3.5 w-56 border-2 border-borda-bordaCinzaClaro mt-0 ">
        <li className=" mt-12 mb-14 ml-7 hover:bg-cinzaHover-cinzaClaro hover:text-azul-marinho">
          <SidebarItem src={LogoStartpn} alt="LogoStartpn"
          />
        </li>
        <li className="ml-6 mb-9 mr-4 hover:bg-cinzaHover-cinzaClaro hover:text-azul-marinho rounded-lg ">
          <SidebarItem src={Playbooks} alt="LogoStartpn" 
          Text="Playbooks"
          marginLeft=""/>
        </li>
        <li className="ml-6 mb-9 mr-4 hover:bg-cinzaHover-cinzaClaro hover:text-azul-marinho rounded-lg">
          <SidebarItem src={taskSquare} alt="LogoStartpn" Text="Exemplo" />
        </li>
        <li className="ml-6 mb-9 mr-4 hover:bg-cinzaHover-cinzaClaro hover:text-azul-marinho rounded-lg">
          <SidebarItem src={message} alt="LogoStartpn" Text="Mensagens" />
        </li>
        <li className="ml-6 mb-9 mr-4 hover:bg-cinzaHover-cinzaClaro hover:text-azul-marinho rounded-lg">
          <SidebarItem src={setting} alt="LogoStartpn" Text="Configurações" />
        </li>
        <li className="ml-6 mb-9 mr-4 hover:bg-cinzaHover-cinzaClaro hover:text-azul-marinho rounded-lg">
          <SidebarItem src={user} alt="LogoStartpn" Text="Minha conta" />
        </li>
        <li className="ml-6 mt-28 mr-4 hover:bg-cinzaHover-cinzaClaro hover:text-azul-marinho rounded-lg">
          <SidebarItem src={Logout}
          alt="LogoStartpn" Text="Sair" />
        </li>
      </ul>
      <div>
      {/* <h1 className=''>Playbooks</h1> */}
      <BoxLayout
        width="321px"
        height="600px"
        marginTop="70px"
        marginLeft="65px"
        marginRight="20px"
        marginBottom="0px"
        borderColor="#D7D7D7"
        background="#FFFFFF"
        borderRadius="10px"
      />
      </div>
      <div>

      <BoxLayout
        width="850px"
        height="231px"
        marginTop="70px"
        marginLeft="0px"
        marginRight="0px"
        marginBottom="0px"
        borderWidth="1px"
        borderColor="#D7D7D7"
        background="#FFFFFF"
        borderRadius="10px"
      />
      <BoxLayout
        width="850px"
        height="231px"
        marginTop="20px"
        marginLeft="0px"
        marginRight="0px"
        marginBottom="0px"
        borderWidth="1px"
        borderColor="#D7D7D7"
        background="#FFFFFF"
        borderRadius="10px"
      />
      </div>
    </div>
  );
};

export default Sidebar;
