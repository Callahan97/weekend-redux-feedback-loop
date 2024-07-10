import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const UnderstandingComp = () => {
    const [understanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleNext = () => {
        dispatch({ type: 'SET_UNDERSTANDING', payload: understanding });
        navigate('/support');
    };

    return (
        <div>
            <h2>How well are you understanding the content?</h2>
            <h3>1 - 5</h3>
            <input type="number"
                value={understanding}
                onChange={(e) => setUnderstanding(e.target.value)}
                data-testid="input"/>
                
            <button onClick={handleNext} data-testid="next">Next</button>
        </div>
    );
};

export default UnderstandingComp;