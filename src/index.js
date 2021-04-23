import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';

/* const Tweet = () => {
    return (
        <div className="tweet">
            Tweet
        </div>
    );
} */
 const Avatar = () => {
     return(
        <img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar"/>
     );
 }
function Tweet(){
    return (
        <div className="tweet">
            <Avatar/>
            Tweet
        </div>
    );
}



reactDom.render(<Tweet/>, document.querySelector('#root'));