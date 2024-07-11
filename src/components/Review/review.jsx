import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const ReviewComp = () => {
    const feedback = useSelector((state) => state.feedback);
    const navigate = useNavigate();
    const dispatch = useDispatch();


const handleSubmit = () => {
    axios.post('/api/feedback', feedback)
        .then(() => {
            dispatch({ type: 'RESET_FEEDBACK' });
            navigate('/thank-you');
            })
            .catch((error) => {
            console.error('Error submitting feedback:', error);
            });
    };

    return (
        <div>
            <h2>Review your feedback</h2>
            <p>Feeling: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>
            <button onClick={handleSubmit} data-testid="next">Submit</button>
        </div>
    );
};

export default ReviewComp;