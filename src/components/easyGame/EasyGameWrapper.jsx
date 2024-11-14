import React from 'react';
import { useNavigate } from 'react-router-dom';
import HardGame from './index'; // Assuming HardGame is the name of your class component
import EasyGame from './index';

function EasyGameWrapper() {
    const navigate = useNavigate();
    return <EasyGame navigate={navigate} />;
}

export default EasyGameWrapper;
