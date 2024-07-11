import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouComp = () => {
    const navigate = useNavigate();

    const handleNewFeedback = () => {
        navigate('/feeling');
    };

    return (
        <div>
            <h2>Thank you for your feedback!</h2>
            <button onClick={handleNewFeedback} data-testid="next">Leave New Feedback</button>
        </div>
    );
};

export default ThankYouComp;