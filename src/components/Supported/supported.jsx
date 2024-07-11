import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const SupportComp = () => {
    const [support, setSupport] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();


    const handleNext = () => {
        dispatch({ type: 'SET_SUPPORT', payload: support });
        history.push('/comments');
    };


    return (
        <div>
            <h2>How well are you being supported?</h2>
            <input
                type="number"
                value={support}
                onChange={(e) => setSupport(e.target.value)}
                data-testid="input"
            />
            <button onClick={handleNext} data-testid="next">Next</button>
        </div>
    );
};

export default SupportComp;
