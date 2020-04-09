import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Headshot from './img/headshot.jpg';
import * as THREE from 'three';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader';
import useWindowSize from '@rehooks/window-size';

console.log(DragControls)

export default function Home(props) {
    let controls = null;
    let renderer = useRef(null);
    let scene = null;
    let camera = useRef(null);
    let windowSize = useWindowSize();
    let canvas = useRef(null);
    let object = null;


    // let controls = null;
    // let container = null;

    function init() {
        scene = new THREE.Scene();

        camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight - 100, 0.1, 1000);
        renderer.current = new THREE.WebGLRenderer({ canvas: canvas.current, antialias: true });
        renderer.current.setSize(window.innerWidth, window.innerHeight);
        scene.background = new THREE.Color('#EEEEFF')
        var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight);
        var ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        scene.add(ambientLight);

        // scene.add(cube);
        camera.current.position.z = 5;
        var animate = function () {
            requestAnimationFrame(animate);
            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;
            renderer.current.render(scene, camera.current);
        };
        animate();

        const manager = new THREE.LoadingManager();
        manager.addHandler(/\.dds$/i, new DDSLoader());

        new MTLLoader(manager)
            .load('https://christiandenny.com/models/desk.mtl', materials => {
                materials.preload();
                const loader = new OBJLoader(manager);
                loader.setMaterials(materials).load('https://christiandenny.com/models/desk.obj', object => {
                    let scale = 0.01;
                    object.scale.x = scale;
                    object.scale.y = scale;
                    object.scale.z = scale;

                    object.position.x = 0;
                    object.position.z = -12;
                    object.position.y = -8;
                    object.rotation.x = .40;
                    scene.add(object);
                    controls = new DragControls([object], camera.current, canvas.current)
                }, (xhr) => console.log(xhr.loaded), err => console.log(err));
            }, progress => {
                console.log(progress);
            }, error => {
                console.error(error);
            })
        //     const loader = new FBXLoader();
        //     loader.load('https://christiandenny.com/models/3d-model.fbx', object => {
        //         let scale = 0.01;
        //         object.scale.x = scale;
        //         object.scale.y = scale;
        //         object.scale.z = scale;

        //         object.position.x = 2;
        //         object.position.z = -10;
        //         object.position.y = -10;
        //         scene.add(object);
        //     }, (xhr) => console.log(xhr.loaded), err => console.log(err));

    }

    useEffect(() => {
        init();
    }, []);


    useEffect(() => {
        renderer.current.setSize(windowSize.innerWidth, windowSize.innerHeight - 100);
        camera.current.aspect = windowSize.innerWidth / (windowSize.innerHeight - 100);
        camera.current.updateProjectionMatrix();
    });

    return (
        <div className="App" style={{ position: 'relative', backgroundColor: '#1F7C99' }}>
            <canvas ref={canvas}></canvas>
            <div className={classNames('container blue')} style={{ position: 'absolute', top: 0, left: 0, right: 0, paddingTop: '1.25em', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: 150, }}>
                <h1>Christian Denny</h1>
                <h2>Front-End & Virtual Reality Developer</h2>
            </div>
            <div className="container">


                <div className={classNames('row light')} style={{ backgroundColor: '#1F7C99', paddingTop: '40px', paddingBottom: '40px', justifyContent: 'center' }}>
                    <div className='col-sm' style={{ maxWidth: '350px', marginBottom: 15 }}>
                        <div className={classNames('card')}>
                            <img src={Headshot} style={{ objectFit: 'contain' }} className='card-img-top' alt='computer' />
                            <div className={classNames('card-body blue')}>
                                <h2>Christian Denny</h2>
                                <p>Front-End & Virtual Reality Developer </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm' style={{ display: 'flex', alignItems: 'center', }}>
                        <p>Making web-based 3D experiences is something I love learning about.
                        Finding new and creative ways to utilize the relatively new abilities of the WebXR API has been challenging and exciting.
                        Pushing myself to learn new skills in Web and VR development has afforded me the opportunity to collaborate on many cutting edge and interesting projects.
                        Please visit my projects page, or my GitHub account to find a sampling of the work I have done.
                        If you are interested in using Virtual Reality, 3D web environments, or web-based Augmented Reality for your company,
                        I would be delighted to help you achieve that goal.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}