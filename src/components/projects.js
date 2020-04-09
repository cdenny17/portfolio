import React from 'react';
import WebVr from './img/webvr2.png';
import VanParks from './img/vanparks.png';
import ChoreApp from './img/chore-app.png';
import Story from './img/story.png';
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
                            <p><a href='https://christiandenny.com/webvr'>Check out My Web-based VR Project</a></p>
                            <p>Using Webpack, The WebXR API, WebGL API and THREE.js I built a web-based Virtual Reality experience.</p>

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
                            <p><a href='https://christiandenny.com/revolt-coffee'>Check out Revolt Coffee AR</a></p>
                            <p>This is a Web-based augmented reality campagne for the Revolt Coffee company.
                            As sole developer on this project I collaborated with designer and content creator to create a unique add campagne for The Corwin Bevearge Company, the owners of the Revolt Coffee brand.</p>
                        </div>
                    </div>



                    <div className='card'>
                        <img
                            src={VanParks}
                            className='card-img-top'
                            alt='VanParksVision Mobile APP landing page'
                        />
                        <div className='card-body'>
                            <p><a href='https://dtc-wsuv.org/projects/vanparksvision/index.html'>Check out VanParksVision Mobile App</a></p>
                            <p>As a developer for the VanParksVision Mobile App, I used react native to build an interactive Augmented Reality experience.
                            Additionally, I deployed the mobile app to both Apple and Android store within the deadline.
                            </p>

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
                            <p><a href='https://christiandenny.com/message'> Check out The Message </a></p>
                            <p>Using Three.js I rendered a cube in a 3D space that plays Marshall McLuhan's video on "The Media is the Massage". It was a fun project to test out video capabilities in Three.js.</p>
                        </div>
                    </div>

                    <div className='card'>
                        <img
                            src={ChoreApp}
                            className='card-img-top'
                            alt='Chore App landing page'
                        />
                        <div className='card-body'>
                            <p><a href='https://christiandenny.com/chore-app'>Check out Chore Time</a></p>
                            <p>This chore app was made using React.js, it utilizes local storage to keep the list of people and their asigned
                            chore active until removed. Also, a color is randomly asigned to each name entered to keep the list of chores organized.
                                You can enter a few prizes, and once all the chores are checked off tap the spinning wheel and one prize is randomly selected.</p>

                        </div>
                    </div>

                    <div className='card'>
                        <img
                            src={Story}
                            className='card-img-top'
                            alt='Story landing page'
                        />
                        <div className='card-body'>
                            <p> <a href='https://dtc-wsuv.org/cdenny17/story/'>Check out The Story</a></p>
                            <p>I built the story site with JavaScript using Pixabay's API. Whenever users fill-in portions of the "mad-lib" style story a
                            related picture is displayed from Pixabay.</p>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}