import { createStore, combineReducers } from 'redux';

const feedbackReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return { ...state, feeling: action.payload };
        case 'SET_UNDERSTANDING':
            return { ...state, understanding: action.payload };
        case 'SET_SUPPORT':
            return { ...state, support: action.payload };
        case 'SET_COMMENTS':
            return { ...state, comments: action.payload };
        case 'RESET_FEEDBACK':
            return {};
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    feedback: feedbackReducer
});

const store = createStore(rootReducer);

export default store;