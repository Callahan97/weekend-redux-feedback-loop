import {useEffect, useState} from 'react';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from '../../store';
import './App.css';

import FeelingComp from '../Feeling/feeling';
import UnderstandingComp from '../Understanding/understanding';
import SupportComp from '../Supported/supported';
import { Provider } from 'react-redux';


function App() {
  const [feedbackList, setFeedbackList] = useState([]);
  

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

  useEffect(fetchFeedback, []);

  
  return (
    <Provider store={store}>
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Routes>
        <Route path="/feeling" element={<FeelingComp/>} />
        <Route path="/understanding" element={<UnderstandingComp/>} />
        <Route path="/support" element={<SupportComp/>} />
        <Route path="/" element={<FeelingComp />} />
      </Routes>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
