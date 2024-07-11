import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const FeelingComp = () => {
    const [feeling, setFeeling] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = () => {
        dispatch({ type: 'SET_FEELING', payload: feeling });
        history.push('/understanding');
    };

    return (
        <div>
            <h2>How are you feeling today?</h2>
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
