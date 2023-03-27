import React from 'react';
import logo from '../images/svg/logo.svg';
import Input from './Input';
import Button from '../components/Button';

const LoginAcesso = () => {
  return (
    <div className="ml-24">
      <img src={logo} alt="logo" className="mt-40 mb-9" />
      <p className="text-[#476ee6] font-poppins font-medium text-2xl leading-9 mb-4 ">
        Dados de acesso
      </p>

      <form className="flex flex-col mr-36">
        <div className="mt-9">
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
        </div>
        <div className="mt-9">
          <Input
            nomeLabel="Senha"
            type="text"
            placeholder="Insira uma senha"
            padding="11px"
            borderRadius="10px"
            border="none"
            background="#FFFFFF"
            width="445px"
            marginBottom="0px"
            fontFamily="Poppins, sans-serif"
            possuiItem={true}
          />
          <div className="flex items-end space-x-5">
            <Button
              name="Entrar"
              color="#FFFFFF"
              background="#476EE6"
              width="185px"
              height="48px"
              borderRadius="60px"
              marginTop="48px"
              marginLeft="0px"
              marginRight="94px"
              fontFamily="Poppins"
              fontStyle="semibold"
              fontSize="18px"
              lineHeight="20px"
            />
            <p className="text-[#476ee6]">Esqueceu a senha?</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginAcesso;
