import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarItem from '../components/SidebarItem';
import Input from '../components/Input';
import Select from '../components/Select';
import Seta from '../images/svg/seta.svg';
import Rectangule from '../images/svg/Rectangle 1.svg';

const EditCard = () => {
  return (
    <div className="flex w-screen h-screen bg-cinza-brancoEscuro">
      <Sidebar />
      <SidebarItem />
      <div className="ml-[81px]">
        <div className="">
          <div className="flex items-center mt-[47px] mb-[49px]">
            <div className="flex items-center mr-[27px]">
              <img src={Rectangule} alt="" />
              <div className="absolute ml-[6px]">
                <img src={Seta} alt="" />
              </div>
            </div>
            <h1 className="contents ml-16 mt-26px font-poppins text-3xl text-azul-marinho font-semibold">
              Editar card
            </h1>
          </div>
          <div className="flex text-sm text-[#787486] cursor-pointer rounded-lg bg-white border-2 border-borda-bordaCinzaClaro h-32 w-[1080px]">
            <div className="flex items-center">
              <div className='ml-6'>
                <label>Nome</label>
                <Input width="570px" 
                height="33.8px" 
                borderRadius="7px"
                 />
              </div>
              <div className=''>
                <label>Categoria</label>
                <Select 
                width="395px"
                height="45px" 
                borderRadius="7px"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
