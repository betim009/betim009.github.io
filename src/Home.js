import React, { useState } from 'react';
import image from './img/15-cafe.jpg';
import image1 from './img/img1.jpg'; 
import image2 from './img/img2.jpg'; 
import image3 from './img/img3.jpg'; 
import image4 from './img/img4.jpg'; 
import image5 from './img/img5.jpg'; 
import imagePerfil from './img/perfil.jpg'


function Home() {
  const [stacks, setStacks] = useState(['JavaScript', 'Node.js', 'Linux', 'React.js']);
  
  return (
    <div>
      <main>
        <section id="about">
          <h2>Sobre</h2>
          <p>Olá, meu nome é Alberto e sou um desenvolvedor de software apaixonado pelo mundo da tecnologia. Com 27 anos de idade, nasci e cresci na região do Caparaó do Espírito Santo, onde descobri minha paixão pelas cachoeiras e águas cristalinas. No entanto, minha verdadeira paixão sempre foi a tecnologia.

            Com formação em Técnico em Informática e Licenciatura em Informática, tive o privilégio de aprender com alguns dos melhores mentores da área. Agora estou buscando novas oportunidades como Desenvolvedor Remoto, com habilidades em FrontEnd e BackEnd, aprendidas durante meus estudos na Trybe.

            Sou uma pessoa com muita energia e curiosidade, sempre buscando aprender mais e ajudar os outros. Acredito que nunca é tarde demais para aprender e, ao mesmo tempo, que posso ensinar muitas coisas valiosas para a minha equipe.

            Se você está procurando um desenvolvedor de software motivado, dedicado e apaixonado, não hesite em entrar em contato comigo! Você pode encontrar meu portfólio no GitHub em github.com/betim009 ou me seguir no Instagram em @albertofernandescouto."
          </p>
          <h2>Stacks:</h2>
          <ul>
            {stacks.map((e) => <li>{e}</li>)}
          </ul>
        </section>
        <section id="gallery">
          <h2>Meu mundo</h2>
          <ul>
            <li><img src={image} alt="Imagem 1" /></li>
            <li><img src={image1} style={{ maxWidth: "300px" }} alt="Imagem 1" /></li>
            <li><img src={image2} alt="Imagem 1" /></li>
            <li><img src={image3} alt="Imagem 1" /></li>
            <li><img src={image4} alt="Imagem 1" /></li>
            <li><img src={image5} alt="Imagem 1" /></li>
            <img src={imagePerfil} style={{ maxWidth: "200px" }} alt="Imagem 1" />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Home;
