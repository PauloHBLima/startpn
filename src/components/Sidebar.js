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
    
    <div className="flex bg-white h-screen w-56 top-0 left-0  rounded-2xl border-2 border-borda-bordaCinzaClaro">{/* w-56 */}
        <ul>
          <li className='mt-12 mb-14 ml-7 '>
          <SidebarItem
          src={LogoStartpn}
          alt="LogoStartpn"
        />
          </li>
          <li className='ml-6 mb-9 mr-4'>
          <SidebarItem
          src={Playbooks}
          alt="LogoStartpn"
          Text="Playbooks"
        />
          </li>
          <li className='ml-6 mb-9 mr-4'>
          <SidebarItem
          src={taskSquare}
          alt="LogoStartpn"
          Text="Exemplo"
        />
          </li>
          <li className='ml-6 mb-9 mr-4'>
          <SidebarItem
          src={message}
          alt="LogoStartpn"
          Text="Mensagens"
        />
          </li>
          <li className='ml-6 mb-9 mr-4'>
          <SidebarItem
          src={setting}
          alt="LogoStartpn"
          Text="Configurações"
        />
          </li>
          <li className='ml-6 mb-9 mr-4'>
          <SidebarItem
          src={user}
          alt="LogoStartpn"
          Text="Minha conta"
        />
          </li>
          <li className='ml-6 mt-48 mr-4'>
          <SidebarItem
          src={Logout}
          alt="LogoStartpn"
          Text="Sair"
        />
          </li>
        </ul>
        <div className='flex'>
        <BoxLayout
    width="321px"
    height="600px"
    marginTop="70px"
    marginLeft="120px"
    marginRight="20px"
    marginBottom="0px"
    />
    <div>
    <BoxLayout 
           width="850px"
           height="231px"
           marginTop="70px"
           marginLeft="0px"
           marginRight="0px"
           marginBottom="0px"/>
          <BoxLayout 
           width="850px"
           height="231px"
           marginTop="20px"
           marginLeft="0px"
           marginRight="0px"
           marginBottom="0px"/>
    </div>
        </div>
    </div>
    
  );
};

export default Sidebar;
