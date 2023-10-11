import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Card.css'

function CardComponent() {
    const cardContents = [
        {
            title: 'SuperProf',
            text: 'Aulas Particulares!',
            link: 'https://www.superprof.com.br/html-css-bootstrap-javascript-react-python-logica-programacao-algoritmos-linux-excel-planilhas-muito.html',
            icon: 'bi bi-book-half',
        },
        {
            title: 'LinkedIn',
            text: 'Perfil no LinkeDin!',
            link: 'https://www.linkedin.com/in/albertocouto/',
            icon: 'bi bi-linkedin',
        },
        {
            title: 'WhatsApp',
            text: 'Entre em contato comigo pelo WhatsApp!',
            link: 'https://api.whatsapp.com/send?phone=28999082744',
            icon: 'bi bi-whatsapp',
        },
        {
            title: 'GitHub',
            text: 'Dê uma olhada no meu github!',
            link: 'https://github.com/betim009',
            icon: 'bi bi-github',
        },
        {
            title: 'Instagram',
            text: 'Meu instagram!',
            link: 'https://www.instagram.com/albertofernandescouto/',
            icon: 'bi bi-instagram',
        },
    ];

    return (
        <div className='container p-5'>
            <Row xs={1} md={1} className="g-4">
                {cardContents.map((content, idx) => (
                    <Col key={idx}>
                        <Card className="card-css text-center">
                            <i class={`${content.icon}`} style={{fontSize: '34px'}} />
                            <Card.Body>
                                <Card.Title>{content.title}</Card.Title>
                                <Card.Text>{content.text}</Card.Text>
                                <a className="btn btn-dark p-2 w-50"
                                    href={content.link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Visitar
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default CardComponent;
