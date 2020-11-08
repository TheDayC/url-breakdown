import React from 'react';
import './styles.css';

interface IErrorProps {
    error: string;
}

const Error: React.FC<IErrorProps> = ({error}) => {
    return (
        <p className="error">{error}</p>
    );
}

export default Error;
