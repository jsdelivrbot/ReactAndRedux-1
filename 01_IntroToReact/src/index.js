import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAO2L7QcypiDD2EpkQdG4TZLHE9pD5phG8';

// Create a new component. This component should produce some HTML
const App =  () => {
    return (
        <div>Hi!</div>
    )
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));