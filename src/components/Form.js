import React from 'react';
import logo from '../images/svg/logo.svg';
import Input from './Input';
import ButtonRetangulo from './ButtonRetangulo';
import Button from '../components/Button';

const Cadastro = () => {
  return (
    <div>
      <img src={logo} alt="logo" className="mt-8 mb-8" />
      <p className="text-[#476ee6] font-poppins font-medium text-2xl leading-9 mb-4 ">Cadastro</p>

      <form className="flex flex-wrap">
        <Input
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
          possuiItem={false}
        />
        <Input
          nomeLabel="E-mail"
          type="text"
          placeholder="Insira seu e-mail"
          padding="11px"
          borderRadius="10px"
          border="none"
          background="#FFFFFF"
          width="290px"
          marginBottom="0px"
          fontFamily="Poppins, sans-serif"
          possuiItem={false}
        />

        <Input
          nomeLabel="Senha"
          type="text"
          placeholder="Insira uma senha"
          padding="11px"
          borderRadius="10px"
          border="none"
          background="#FFFFFF"
          width="275px"
          marginBottom="0px"
          fontFamily="Poppins, sans-serif"
          possuiItem={true}
        />
        <Input
          nomeLabel="Confirme sua senha"
          type="text"
          placeholder="Confirma senha"
          padding="11px"
          borderRadius="10px"
          border="none"
          background="#FFFFFF"
          width="275px"
          marginBottom="0px"
          fontFamily="Poppins, sans-serif"
          possuiItem={true}
        />
      </form>
      <p className="font-poppins font-semibold text-sm mt-6">
        Termos de uso e privacidade
      </p>
      <div className="flex">
        <button>
          <ButtonRetangulo />
        </button>
        <p className="font-poppins font-medium text-xs leading-5 ml-4 mt-4">
          Ao clicar neste botão, eu concordo com os termos de uso e privacidade
          da nossa
          <p>empresa.</p>
          <p className="text-[#476ee6]">Termos de uso e Privacidade</p>
        </p>
      </div>
      <Button
        name="Cadastrar"
        color="#FFFFFF"
        background="#476EE6"
        width="267px"
        height="45.37px"
        borderRadius="60px"
        marginTop="63.08px"
        marginLeft="227px"
        fontFamily='Poppins'
        fontStyle='semibold'
        fontSize='18px'
        lineHeight='20px'
      />
      <div  className='mt-14 text-center'>
      <p className="text-[3C3C43] font-poppins font-medium text-sm">Já tem uma conta? <a className="text-azul-marinho ml-8">Login</a> </p>  

      </div>
      
    </div>
  );
};

export default Cadastro;
