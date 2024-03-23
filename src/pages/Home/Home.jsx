import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'

import '../../App.css';

function Home() {
    return (
        <>
        <div className='container'>
            <Navbar />
            <div className='main_container'>
                <div className='centered-div'>
                    <h1 className='header'>Home</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home