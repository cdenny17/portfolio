import React from 'react';
import LinkedIn from './img/linkIcon2.png';
import Email from './img/emailIcon2.png';
import Git from './img/gitIcon2.png';


export default function Footer() {
    return (
        <footer className="footer mt-auto py-3">
            <div className='container blue' >
                <div className='row' style={{}}>
                    <a href="https://www.linkedin.com/in/christian-denny-6b403817/" target="_blank">
                        <img src={LinkedIn}
                            style={{ maxHeight: '2.5rem' }}
                            alt='LinkedIn Icon' />
                    </a>
                    <a href="mailto:christian.denny.dev@gmail.com" target="_blank">
                        <img src={Email}
                            style={{ maxHeight: '2.5rem' }}
                            alt='Email Icon' />
                    </a>
                    <a href="https://github.com/cdenny17" target="_blank">
                        <img src={Git}
                            style={{ maxHeight: '2.5rem' }}
                            alt='GitHub Icon' />
                    </a>

                </div>
            </div>
        </footer>
    )
}