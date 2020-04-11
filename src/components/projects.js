import React from 'react';
import WebVr from './img/webvr2.jpg';
import VanParks from './img/vanparks.jpg';
import ChoreApp from './img/chore-app.jpg';
import Story from './img/story.jpg';
import MessageVideo from './img/message.mp4';
import RevoltVideo from './img/revolt-video.mp4';

export default function Projects(props) {

    return (
        <div>
            <div className="container" style={{ padding: 15 }}>
                <div className='card-deck' style={{}}>

                    <div className='card'>
                        <img
                            src={WebVr}
                            className='card-img-top'
                            alt='Boundless WebVR landing page'
                        />
                        <div className='card-body'>
                            <h3>Boundless WebVR</h3>
                            <p>Using Webpack, The WebXR API, WebGL API and THREE.js I built a web-based Virtual Reality experience. Connect an HTC Vive to play an archery game without having to download it.</p>
                            <button type='button' className='btn btn-outline-primary'><a href='https://christiandenny.com/webvr'>Check out Boundless WebVR</a></button>
                        </div>
                    </div>


                    <div className='card'>
                        <video
                            src={RevoltVideo}
                            className='card-img-top'
                            alt='Looping video of three.js project'
                            loop
                            autoPlay
                            muted
                        />
                        <div className='card-body'>
                            <h3>Revolt Coffee AR</h3>
                            <p>This is a Web-based augmented reality site for Revolt Coffee.
                            As sole developer on this project I collaborated with a designer and animator to create a unique add campaign.</p>
                            <button type='button' className='btn btn-outline-primary'><a href='https://christiandenny.com/revolt-coffee'>Check out Revolt Coffee AR</a></button>
                        </div>
                    </div>



                    <div className='card'>
                        <img
                            src={VanParks}
                            className='card-img-top'
                            alt='VanParksVision Mobile APP landing page'
                        />
                        <div className='card-body'>
                            <h3>VanParksVision Mobile App</h3>
                            <p>As a developer for the VanParksVision Mobile App, using React-Native I built an interactive Augmented Reality experience.
                            Additionally, I deployed the mobile app to both Apple and Android store within the deadline.
                            </p>
                            <button type='button' className='btn btn-outline-primary'><a href='https://dtc-wsuv.org/projects/vanparksvision/index.html'>Check out VanParksVision</a></button>


                        </div>
                    </div>

                </div>
                <div className='card-deck' style={{}}>

                    <div className='card'>
                        <video
                            src={MessageVideo}
                            className='card-img-top'
                            alt='Looping video of three.js project'
                            loop
                            autoPlay
                            muted
                        />
                        <div className='card-body'>
                            <h3>The Message</h3>
                            <p>Using Three.js I rendered a cube in a 3D space that plays Marshall McLuhan's video on "The Media is the Massage". It was a fun project to test out video capabilities in Three.js.</p>
                            <button type='button' className='btn btn-outline-primary'><a href='https://dtc-wsuv.org/cdenny17/message/'> Check out The Message </a></button>
                        </div>
                    </div>

                    <div className='card'>
                        <img
                            src={ChoreApp}
                            className='card-img-top'
                            alt='Chore App landing page'
                        />
                        <div className='card-body'>
                            <h3>Chore App</h3>
                            <p>Chore App was made using React.js, it utilizes local storage to keep the list of people and their asigned
                            chore active until removed. A color is asigned to each name to keep the list of chores organized.</p>
                            <button type='button' className='btn btn-outline-primary'><a href='https://christiandenny.com/chore-app'>Check out Chore Time</a></button>

                        </div>
                    </div>

                    <div className='card'>
                        <img
                            src={Story}
                            className='card-img-top'
                            alt='Story landing page'
                        />
                        <div className='card-body'>
                            <h3>The Story</h3>
                            <p>I built The Story site with JavaScript using Pixabay's API. Whenever users fillin portions of the "mad-lib" style story, a
                            related picture is displayed from Pixabay.</p>
                            <button type='button' className='btn btn-outline-primary' ><a href='https://dtc-wsuv.org/cdenny17/story/' >Check out The Story</a></button>

                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
}