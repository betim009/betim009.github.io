import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardComponent() {
    const cardContents = [
        {
            title: 'SuperProf',
            text: 'Aulas Particulares de Informática e Programação.',
            link: 'https://www.superprof.com.br/html-css-bootstrap-javascript-react-python-logica-programacao-algoritmos-linux-excel-planilhas-muito.html'
        },
        {
            title: 'LinkedIn',
            text: 'Perfil no LinkeDin',
            link: 'https://www.linkedin.com/in/albertocouto/',
        },
        {
            title: 'WhatsApp',
            text: 'Entre em contato comigo pelo WhatsApp:',
            link: 'https://api.whatsapp.com/send?phone=28999082744',
        },
        {
            title: 'GitHub',
            text: 'Dê uma olhada no meu github!',
            link: 'https://github.com/betim009',
        },
    ];

    return (
        <div className='container p-5'>
            <Row xs={1} md={2} className="g-4">
                {cardContents.map((content, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{content.title}</Card.Title>
                                <Card.Text>{content.text}</Card.Text>
                                <a href={content.link} target="_blank" rel="noopener noreferrer">Visitar</a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default CardComponent;
