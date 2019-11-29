import React from 'react';
import './JobBtn.css';

const JobBtn = props => (
    <button className={`job-btn btn btn-${props.btntype} btn-sm`}{...props}>
        {props.children}
    </button>
);

export default JobBtn;