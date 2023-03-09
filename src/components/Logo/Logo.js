import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0' style={{ display: 'flex' }}>
            <Tilt className='Tilt br2 shadow-2' tiltMaxAngleX={55} tiltMaxAngleY={55}>
                <div style={{ width: '150', height: '150'}}>
                    <div className='Tilt-inner pa3'>
                        <img style={{paddingTop: '5px' }} alt='logo' src={brain}/></div>
                    </div>
            </Tilt>
    </div>
    );
}

export default Logo;