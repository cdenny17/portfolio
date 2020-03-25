import React from 'react';
import WebVr from './img/webvr.png'


export default function Projects(props) {

    return (
        <div>
            <div className="container-fluid" style={{}}>
                <div className='row' style={{
                    border: '.5px solid black',
                    padding: '2px',

                }}>
                    <div className='col-sm' style={{
                        border: '.5px solid black',
                        margin: '2px',
                        padding: '2px',
                    }}>
                        This is a column
                            <div className='card'>
                            <img src={WebVr} style={{ objectFit: 'contain' }} className='card-img-top' alt='computer' />
                            <div className='card-body'>
                                <p>This is going to be: <a href='https://christiandenny.com/webvr'>My Web-based VR Project</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm' style={{
                        border: '.5px solid black',
                        margin: '2px',
                        padding: '2px',
                    }}>
                        This is a column
                    </div>
                    <div className='col-sm' style={{
                        border: '.5px solid black',
                        margin: '2px',
                        padding: '2px',
                    }}>
                        This is a column
                    </div>
                </div>
                <div className='row' style={{ border: '.5px solid black', padding: '2px' }}>
                    <div className='col-sm' style={{
                        border: '.5px solid black',
                        margin: '2px',
                        padding: '2px',
                    }}>
                        This is a column
                        <div className='card'>
                            <img src={WebVr} style={{ objectFit: 'contain' }} className='card-img-top' alt='computer' />
                            <div className='card-body'>
                                <p>This is going to be: <a href='https://christiandenny.com/webvr'>My Web-based VR Project</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm' style={{
                        border: '.5px solid black',
                        margin: '2px',
                        padding: '2px',
                    }}>
                        This is a column
                    </div>
                    <div className='col-sm' style={{
                        border: '.5px solid black',
                        margin: '2px',
                        padding: '2px',
                    }}>
                        This is a column
                    </div>
                </div>

            </div >
        </div >
    );
}