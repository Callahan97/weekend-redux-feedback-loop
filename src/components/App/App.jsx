import {useEffect, useState} from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const fetchFeedback = () => {
    axios({
      method: 'GET',
      url: 'api/feedback'
    }).then((response) => {
      console.log(response);
      console.log(response.data);
      setFeedbackList(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  const [feedbackList, setFeedbackList] = useState([]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
