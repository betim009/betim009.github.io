import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <Container className='p-5 d-flex justify-content-center vh-100 align-items-center text-center'>
            <div>
                <h5 className='lead mb-3'>Página inválida!</h5>
                <Link className='btn btn-lg btn-dark' to='/'>Volte para página principal</Link>
            </div>
        </Container>
    );
};

export default NotFound;