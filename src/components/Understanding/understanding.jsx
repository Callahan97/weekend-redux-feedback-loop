import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



const UnderstandingComp = () => {
    const [understanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();


    const handleNext = () => {
        dispatch({ type: 'SET_UNDERSTANDING', payload: understanding });
        history.push('/support');
    };

    return (
        <div>
            <h2>How well are you understanding the content?</h2>

            <input type="number"
                value={understanding}
                onChange={(e) => setUnderstanding(e.target.value)}
                data-testid="input"/>
                
            <button onClick={handleNext} data-testid="next">Next</button>
        </div>
    );
};

export default UnderstandingComp;
