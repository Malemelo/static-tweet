import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet(){
    return (
        <div className="tweet">
            Tweet
        </div>
    );
}

reactDom.render(<Tweet/>, document.querySelector('#root'));