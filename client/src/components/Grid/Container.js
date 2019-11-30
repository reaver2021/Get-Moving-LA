import React from 'react';

export const Container = ({ fluid, children }) => (
    <div className= {`containers${fluid ? '-fluid': ''}`}>
        {children}
    </div>
);