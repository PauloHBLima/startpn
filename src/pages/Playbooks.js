import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarItem from '../components/SidebarItem';
import BoxLayout from '../components/BoxLayout';
import Pen from '../images/svg/Pen.svg';


const Playbooks = () => {
  const itens = ['Playbook de vendas', 'Playbook de marketing', 'Playbook de suporte', 'Adicionar outra categoria'];

  return (
    <div className="flex w-screen h-screen bg-cinza-brancoEscuro">
      <Sidebar />
      <SidebarItem />
      <div className="flex">
        <div>
          <h1 className="ml-16 mt-26px font-poppins text-3xl text-azul-marinho font-semibold">
            Playbooks
          </h1>

          <BoxLayout
            title="Categorias"
            width="321px"
            height="600px"
            marginTop="30px"
            marginLeft="65px"
            marginRight="20px"
            borderColor="#D7D7D7"
            background="#FFFFFF"
            borderRadius="10px"
            Text={itens}
            src={Pen}
          />
        </div>
        <div>
          <BoxLayout
            width="850px"
            height="231px"
            marginTop="90px"
            borderWidth="1px"
            borderColor="#D7D7D7"
            background="#FFFFFF"
            borderRadius="10px"
          />
          <BoxLayout
            width="850px"
            height="231px"
            marginTop="20px"
            borderWidth="1px"
            borderColor="#D7D7D7"
            background="#FFFFFF"
            borderRadius="10px"
          />
        </div>
      </div>
    </div>
  );
};

export default Playbooks;
