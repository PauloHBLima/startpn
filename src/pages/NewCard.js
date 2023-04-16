import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarItem from '../components/SidebarItem';
import Input from '../components/Input';
import Select from '../components/Select';
import Seta from '../images/svg/seta.svg';
import Rectangule from '../images/svg/Rectangle 1.svg';
import Editors from '../images/svg/Editors.svg';
import CardEdit from '../components/CardEdit';
import Button from '../components/Button';
import Profile from '../images/svg/Profile.svg';

const video = [
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/RG_eyn0fRXs"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>,
];

const NewCard = () => {
  return (
    <div className="flex w-screen h-screen bg-cinza-brancoEscuro">
      <Sidebar className="" />
      <SidebarItem />
      <div className="ml-[81px]">
        <div className="">
          <div className="flex items-center mt-[47px] mb-[49px] justify-between">
            <div className="flex items-center mr-[27px]">
              <img src={Rectangule} alt="" />
              <div className="absolute ml-[6px]">
                <img src={Seta} alt="" />
              </div>
              <div className='ml-[27px]'>
              <h1 className="contents ml-16 mt-26px font-poppins text-3xl text-azul-marinho font-semibold">
                Criar card
              </h1>
              </div>
            </div>
            <div className="flex">
              <img className="w-36" src={Profile} alt="" />
            </div>
          </div>
          <div className="flex text-sm text-[#787486] cursor-pointer rounded-lg bg-white border-2 border-borda-bordaCinzaClaro h-32 w-[1080px] mb-[20px]">
            <div className="flex items-center">
              <div className="ml-6">
                <label>Nome</label>
                <Input
                  width="570px"
                  className="text-title-titleblack font-poppins text-base leading-5 font-medium "
                  height="33.8px"
                  borderRadius="7px"
                  placeholder="Insira um nome"
                />
              </div>
              <div className="">
                <label>Categoria</label>
                <Select width="395px" height="45px" borderRadius="7px" />
              </div>
            </div>
          </div>
          <CardEdit
            width="1080px"
            height="350px"
            marginBottom="20px"
            src={Editors}
            placeholder="escreva algo"
          />
          <div className="flex items-center mt-6 justify-end ">
            <Button
              name="Criar"
              color="#FFFFFF"
              background="#476EE6"
              width="102px"
              height="35px"
              borderRadius="60px"
              marginLeft="520px"
              fontFamily="Poppins"
              fontStyle="semibold"
              fontSize="15px"
              lineHeight="24px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
