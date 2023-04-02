import React, { useState } from 'react';
import _home from './Home.css';

import image from './img/15-cafe.jpg';
import image6 from './img/img6.jpeg';
import image2 from './img/img2.jpg';
import image3 from './img/img3.jpg';
import image4 from './img/img4.jpg';
import image5 from './img/img5.jpg';




function Home() {
    const [stacks, setStacks] = useState(
        ['JavaScript',
            'Node.js',
            'Linux',
            'React.js',
            'Boostrap',
            'MySql',
            'Docker'
        ]);

    return (
        <div>
            <main className="container p-5">
                <section id="about">
                    <h2>Sobre</h2>
                    <p style={{ fontSize: "24px" }}>Olá, meu nome é Alberto e sou um desenvolvedor de software apaixonado pelo mundo da tecnologia.
                        Com 27 anos de idade, nasci e cresci na região do Caparaó do Espírito Santo,
                        onde descobri minha paixão pelas cachoeiras e águas cristalinas.
                        No entanto, minha verdadeira paixão sempre foi a tecnologia.
                        <br></br>
                        <br></br>
                        Com formação em Técnico em Informática e Licenciatura em Informática,
                        tive o privilégio de aprender com alguns dos melhores mentores da área.
                        Agora estou buscando novas oportunidades como Desenvolvedor Remoto,
                        com habilidades em FrontEnd e BackEnd, aprendidas durante meus estudos na Trybe.
                        <br></br>
                        Sou uma pessoa com muita energia e curiosidade, sempre buscando aprender mais e ajudar os outros.
                        Acredito que nunca é tarde demais para aprender e, ao mesmo tempo, que posso ensinar muitas
                        coisas valiosas para a minha equipe.
                        <br></br>
                        <br></br>
                        Se você está procurando um desenvolvedor de software motivado, dedicado e apaixonado,
                        não hesite em entrar em contato comigo!
                        Você pode encontrar meu portfólio no GitHub em <a href="https://github.com/betim009">github.com/betim009</a>
                        ou me seguir no Instagram em <a href="https://www.instagram.com/albertofernandescouto/">@albertofernandescouto</a>.
                    </p>
                    <div className="bg-dark p-4">
                        <h2 className="text-light mb-4">Stacks:</h2>
                        <ul className="list-unstyled text-light">
                            {stacks.map((e, i) => (
                                <li key={i} className="d-flex align-items-center mb-3">
                                    <span className="me-3 text-primary fw-bold">{`${i + 1}`}</span>
                                    <span style={{ fontSize: "24px" }}>{e}</span>
                                </li>
                            ))}
                        </ul>
                    </div>




                </section>
                <section className="mt-5" id="gallery">
                    <h2>Meu mundo</h2>
                    <div className="row gallery">
                        <div className="col-md-4 col-sm-6 gallery-item"><img src={image} alt="Imagem 1" /></div>
                        <div className="col-md-4 col-sm-6 gallery-item"><img src={image2} alt="Imagem 3" /></div>
                        <div className="col-md-4 col-sm-6 gallery-item"><img src={image3} alt="Imagem 4" /></div>
                        <div className="col-md-4 col-sm-6 gallery-item"><img src={image4} alt="Imagem 5" /></div>
                        <div className="col-md-4 col-sm-6 gallery-item"><img src={image5} alt="Imagem 6" /></div>
                        <div className="col-md-4 col-sm-6 gallery-item"><img src={image6} alt="Imagem 2" /></div>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Home;
