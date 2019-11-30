import React from 'react';

export const FormBtn = props => (
    <button {...props} style={{ marginBottom: 5 }} className='btn btn-info'>
        {props.children}
    </button>
);