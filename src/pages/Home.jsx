import React from 'react';
import CardComponent from '../components/Card'
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <div className='bg-dark p-5 '>
                <p className='text-white text-center display-5 fs-5'>Ninguém é tão grande que não pode aprender, nem tão pequeno que não possa ensinar.</p>
                <CardComponent />
            </div>
            <Footer />
        </div>
    )
};

export default Home;