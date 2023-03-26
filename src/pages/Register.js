import React from 'react';
import stevejobs from '../images/svg/stevejobs.svg';
import fundocadastro from '../images/svg/fundocadastro.svg';
import Cadastro from '../components/Form';

const Register = () => {
  return (
    <section className='flex'>
      <div className='w-1/2'>
        <img src={fundocadastro} alt="" />
        <img className='absolute top-32 ' src={stevejobs} alt="" />
      </div>
      <div className='w-1/2'>
      <Cadastro />
      </div>
    </section>

  );
};
export default Register;
