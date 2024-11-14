import React from 'react';
import { useNavigate } from 'react-router-dom';
import MidGame from './index';

function MidGameWrapper() {
    const navigate = useNavigate();
    return <MidGame navigate={navigate} />;
}

export default MidGameWrapper;
