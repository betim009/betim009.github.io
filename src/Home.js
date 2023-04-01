import React, { useState } from 'react';
import _home from './Home.css';
import image from './img/15-cafe.jpg';
import image1 from './img/img1.jpg';
import image2 from './img/img2.jpg';
import image3 from './img/img3.jpg';
import image4 from './img/img4.jpg';
import image5 from './img/img5.jpg';
import imagePerfil from './img/perfil.jpg'



function Home() {
    const [stacks, setStacks] = useState(['JavaScript', 'Node.js', 'Linux', 'React.js', 'MySql', 'Boostrap']);

    return (
        <div>
            <main className="container">
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
                    <div className="gallery">
                        <div className="gallery-item"><img src={image} alt="Imagem 1" /></div>
                        <div className="gallery-item"><img src={image2} alt="Imagem 3" /></div>
                        <div className="gallery-item"><img src={image3} alt="Imagem 4" /></div>
                        <div className="gallery-item"><img src={image4} alt="Imagem 5" /></div>
                        <div className="gallery-item"><img src={image5} alt="Imagem 6" /></div>
                        <div className="gallery-item"><img src={image1} alt="Imagem 2" /></div>
                        <div className="gallery-item"><img src={imagePerfil} alt="Imagem do perfil" /></div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
