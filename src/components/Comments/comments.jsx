import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CommentsComp = () => {
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNext = () => {
        dispatch({ type: 'SET_COMMENTS', payload: comments });
        navigate('/review');
    };

    return (
        <div>
            <h2>Any comments you want to leave?</h2>

              <input type="text"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                data-testid="input"/>

            <button onClick={handleNext} data-testid="next">Next</button>
        </div>
    );
};

export default CommentsComp;