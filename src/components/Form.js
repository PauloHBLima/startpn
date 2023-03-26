import React from 'react';
import Title from './Styles';

import logo from '../images/svg/logo.svg';
import Input from './Input';

const Cadastro = () => {
  return (
      <div>
        <img src={logo} alt="logo" className='mt-12 mb-14'/>
        <Title className='mb-7 Poppins, sans-serif'>Cadastro</Title>
        
        <form className='flex flex-wrap'>
        <Input
        nomeLabel="Nome" 
        type='text'
        placeholder='Insira seu nome'
        padding= '17px'
        borderRadius='10px'
        border='none'
        background='#FFFFFF'
        width='290px'
        marginBottom='26px'
        fontFamily='Poppins, sans-serif'
        possuiItem={false}
        />
        <Input
        nomeLabel="E-mail" 
        type='text'
        placeholder='Insira seu e-mail'
        padding= '17px'
        borderRadius='10px'
        border='none'
        background='#FFFFFF'
        width='290px'
        marginBottom='26px'
        fontFamily='Poppins, sans-serif'
        possuiItem= {false}
        />
        
        <Input
        nomeLabel="Senha" 
        type='text'
        placeholder='Insira uma senha'
        padding= '17px'
        borderRadius='10px'
        border='none'
        background='#FFFFFF'
        width='269px'
        marginBottom='26px'
        fontFamily='Poppins, sans-serif'
        possuiItem={true}
        />   
        <Input
        nomeLabel="Confirme sua senha" 
        type='text'
        placeholder='Confirma senha'
        padding= '17px'
        borderRadius='10px'
        border='none'
        background='#FFFFFF'
        width='269px'
        marginBottom='26px'
        fontFamily='Poppins, sans-serif'
        possuiItem={true}
        />
        </form>
        <p className='font-poppins font-semibold leading-5 mb-5'>Termos de uso e privacidade</p>
        <button className='w-5 bg-black color-'></button>
        <label>
          Ao clicar neste botão, eu concordo com os termos de uso e privacidade
          da nossa empresa.
        </label>
        <p>Termos de uso e Privacidade</p>
        <button>CADASTRAR</button>
        <p>Já tem uma conta?</p>
        <a>Login</a>
      </div>
  );
};

export default Cadastro;
