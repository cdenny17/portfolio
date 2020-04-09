import React from 'react';
import Coming from './img/comingsoon.jpg';

export default function Resume(props) {
    return (
        <div>
            <div className='embed-responsive' style={{ height: 'calc(100vh - 140px)' }} >
                <iframe className='embed-responsive-item' style={{}} title="Resume" src='https://christiandenny.com/christian-resume.pdf' allowFullScreen></iframe>
            </div>
        </div>
    );
}