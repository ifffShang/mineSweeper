import React from 'react';
import { useNavigate } from 'react-router-dom';
import HardGame from './index'; // Assuming HardGame is the name of your class component

function HardGameWrapper() {
    const navigate = useNavigate();
    return <HardGame navigate={navigate} />;
}

export default HardGameWrapper;
