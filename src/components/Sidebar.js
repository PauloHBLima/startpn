import React from 'react';
import SidebarItem from './SidebarItem';

import Playbooks from '../images/svg/Playbooks.svg';
import Logout from '../images/svg/Logout.svg';
import setting from '../images/svg/setting.svg';
import taskSquare from '../images/svg/taskSquare.svg';
import user from '../images/svg/user.svg';
import LogoStartpn from '../images/svg/LogoStartpn.svg';

const Sidebar = () => {
  return (
    <div className="bg-white fixed h-full top-0 left-0 w-56">
      <div className="mt-24">
        <SidebarItem
          className="mr-5"
          src={LogoStartpn}
          alt="LogoStartpn"
          Text="LogoStartpn"
        />
        <SidebarItem
          className="mr-5"
          src={Playbooks}
          alt="Playbooks"
          Text="Playbooks"
        />
        <SidebarItem className="mr-5" src={Logout} alt="Logout" Text="Logout" />
        <SidebarItem
          className="mr-5"
          src={setting}
          alt="setting"
          Text="setting"
        />
        <SidebarItem
          className="mr-5"
          src={taskSquare}
          alt="taskSquare"
          Text="taskSquare"
        />
        <SidebarItem className="mr-5" src={user} alt="user" Text="user" />
      </div>
    </div>
  );
};

export default Sidebar;
