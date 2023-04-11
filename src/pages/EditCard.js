import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarItem from '../components/SidebarItem';
import Input from '../components/Input';
import Select from '../components/Select';

const EditCard = () => {
  return (
    <div className="flex w-screen h-screen bg-cinza-brancoEscuro">
      <Sidebar />
      <SidebarItem />
      <div className="flex">
        <div>
          <h1 className="ml-16 mt-26px font-poppins text-3xl text-azul-marinho font-semibold">
            Editar card
          </h1>
          <div className="flex items-center justify-around text-sm text-[#787486] cursor-pointer rounded-lg bg-white mr-3.5 border-2 border-borda-bordaCinzaClaro mt-0 h-32 w-[961px]">
            <div>
              <div className="flex content-around">
                <Input nomeLabel="Nome" width="370px" />
                <Select
                  nomeLabel="Nome"
                  type="text"
                  placeholder="Insira seu nome"
                  padding="11px"
                  borderRadius="10px"
                  border="none"
                  background="#FFFFFF"
                  width="290px"
                  marginBottom="0px"
                  fontFamily="Poppins, sans-serif"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
