import React from 'react';
import CardComponent from '../components/Cards/'
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <div className='bg-dark'>
                <CardComponent />
            </div>
            <div className='bg-white'>
                <Footer />
            </div>
        </>
    )
};

export default Home;