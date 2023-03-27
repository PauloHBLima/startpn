import React from 'react';
import stevejobs from '../images/svg/stevejobs.svg';
import fundocadastro from '../images/svg/fundocadastro.svg';
import Cadastro from '../components/Form';

const Register = () => {
  return (
    <div className='flex'>
      <div className='w-1/2'>
        <img className='' src={fundocadastro} alt="" />
        <img className='absolute top-32 ' src={stevejobs} alt="" />
      </div>
      <div className='w-1/2'>
      <Cadastro />
      </div>
    </div>

  );
};
export default Register;
