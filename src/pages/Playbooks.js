import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarItem from '../components/SidebarItem';
import BoxLayout from '../components/BoxLayout';

const Playbooks = () => {
  const itens = [
    'Playbook de vendas',
    'Playbook de marketing',
    'Playbook de suporte',
    'Adicionar outra categoria',
  ];
  const methodologies = [
    '1. Enteder a dor ou poblema que o cliente quer resolver;',
    '2. Mostrar os módulos que possam resolver o poblema do cliente;',
    '3. Montar a proposta comercial;',
    '4. Apresentar a proposta com a solução;',
    '5. Fazer follow up, após a proposta ser apresentada.',
  ];
  const video = [
  <iframe
   width="560" 
   height="315" 
   src="https://www.youtube.com/embed/RG_eyn0fRXs" title="YouTube video player" 
   frameborder="0" 
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
   allowfullscreen></iframe>]

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
          />
        </div>
        <div>
          <BoxLayout
            title="Nossa metodologia"
            width="850px"
            height="231px"
            marginTop="90px"
            borderWidth="1px"
            borderColor="#D7D7D7"
            background="#FFFFFF"
            borderRadius="10px"
            Text={methodologies}
          />
          <BoxLayout
            title="Assista o conteúdo"
            width="850px"
            height="231px"
            marginTop="20px"
            borderWidth="1px"
            borderColor="#D7D7D7"
            background="#FFFFFF"
            borderRadius="10px"
            Text={video}
          />
        </div>
      </div>
    </div>
  );
};

export default Playbooks;
