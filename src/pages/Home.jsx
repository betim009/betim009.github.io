import React from 'react';
import CardComponent from '../components/Cards/'
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <div className='bg-dark p-5 '>
                <CardComponent />
                <p className='text-white text-center display-5 fs-5'>
                    Ninguém é tão grande que não possa aprender,
                    nem tão pequeno que não possa ensinar.
                </p>
            </div>
            <Footer />
        </div>
    )
};

export default Home;