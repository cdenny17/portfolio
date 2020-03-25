import React, { useState, Card, Img } from 'react';
import classNames from 'classnames';
import Computer from './img/computer.png'



export default function Home(props) {
    let [thingy, setThingy] = useState('thingy');
    function changeButton() {
        setThingy('This is changed');
    }
    return (
        <div className="App">
            <div className="container-fluid" style={{ backgroundColor: 'white' }}>
                <div className='row' style={{ border: '2px solid black' }}>
                    <div className='col-sm' style={{ border: '2px solid black' }}>
                        This is a column {thingy}
                        <button onClick={changeButton}>Click This</button>
                        <div className='card'>
                            <img src={Computer} style={{ objectFit: 'contain' }} className='card-img-top' alt='computer' />
                            <div className='card-body'>
                                <p>This is going to be 3js</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm' style={{ border: '2px solid black' }}>
                        This is a column
          </div>
                    <div className='col-sm' style={{ border: '2px solid black' }}>
                        This is a column
          </div>
                </div>
                <div className='row' style={{ border: '2px solid black' }}>
                    <div className='col-md' style={{ border: '2px solid purple' }}>
                        This is a med column
                    </div>
                    <div className='col-md' style={{ border: '2px solid purple' }}>
                        This is a med column
                    </div>

                </div>
                <div className="container-fluid" style={{ backgroundColor: 'white' }}>
                    Hello container two
            </div>
            </div>
        </div>
    );
}