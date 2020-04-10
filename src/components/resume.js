import React from 'react';
import classNames from 'classnames';
import ResumeImg from './img/resume-color.png';

export default function Resume(props) {
    return (
        <div className="resume-wrapper">
            <button type='button' className='btn btn-outline-primary resume-button'><a href="https://christiandenny.com/christian-resume-color.pdf" target='_blank' rel="noopener noreferrer" download>View or Download PDF</a></button>
            <img src={ResumeImg} className={classNames('img-fluid resume-img')} alt='resume' />
        </div>
    );
}