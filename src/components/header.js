import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export default function Header(props) {
    let location = useLocation().pathname;
    return (
        <header className=''>
            <nav className={classNames('container', 'blue')}>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <Link className={classNames('nav-link', { active: location === '/' })} to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={classNames('nav-link', { active: location === '/projects' })} to="/projects">Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={classNames('nav-link', { active: location === '/resume' })} to="/resume">Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}