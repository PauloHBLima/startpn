import React from 'react';

import logo from '../images/svg/logo.svg';
import stevejobs from '../images/png/stevejobs.png';
import fundocadastro from '../images/png/fundocadastro.png';

const Cadastro = () => {
  return (
    <div>
      <img src={fundocadastro} alt="" />
      <img src={stevejobs} alt="" />
      <img src={logo} alt="logo" />
      <h1>Cadastro</h1>
      <div>
        <form action="">
        <label>Nome</label>
        <input type="text" />
        <label>E-mail</label>
        <input type="email" />
        <label>Senha</label>
        <input type="password" />
        <label>Confirme sua senha</label>
        <input type="password" />
        </form>
        <p>Termos de uso e privacidade</p>
        <div>
        
        <input type="radio" value="" />
        <label>Ao clicar neste botão, eu concordo com os  termos de uso e privacidade da nossa empresa.</label>
        <p>Termos de uso e Privacidade</p>
        </div>
      </div>
      <button>CADASTRAR</button>
      <div>
      <p>Já tem uma conta? </p> <a>Login</a>
      </div>
    </div>
  );
};

export default Cadastro;
