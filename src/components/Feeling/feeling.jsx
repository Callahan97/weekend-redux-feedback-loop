import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FeelingComp = () => {
    const [feeling, setFeeling] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNext = () => {
        dispatch({ type: 'SET_FEELING', payload: feeling });
        navigate('../understanding');
    };

    return (
        <div>
            <h2>How are you feeling today?</h2>
            <h3>1 - 5</h3>
            <input
                type="number"
                value={feeling}
                onChange={(e) => setFeeling(e.target.value)}
                data-testid="input"
            />
            <button onClick={handleNext} data-testid="next">Next</button>
        </div>
    );
};

export default FeelingComp;
