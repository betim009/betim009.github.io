import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div class="d-flex justify-content-center">

            <Form
                action="https://formspree.io/f/xknaqvpw"
                method="POST"
                className='bg-white m-5 p-5'
                style={{ minWidth: "60%", fontSize: '21px' }}
            >
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={8}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </Form.Group>
                <div className='d-flex justify-content-center'>
                    <div className='w-75'>
                        <Button
                            variant="primary"
                            type="submit"
                            className='btn-dark p-3 btn-lg'
                            style={{ fontSize: '21px', width: '100%' }}>
                            Enviar
                        </Button>
                    </div>
                </div>
            </Form>
        </div>

    );
}

export default Footer;
