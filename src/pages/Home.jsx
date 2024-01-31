import React from 'react';
import CardComponent from '../components/Cards/'
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <div className='bg-dark p-5 '>
                <CardComponent />
            </div>
            <Footer />
        </div>
    )
};

export default Home;