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

 const Message = () =>{
    return(
        <div className="message">
            I am loving practicing React js for a turing test and job.
        </div>
    );
 }

 const Author = () =>{
     return(
        <span className="author">
            <span className="name">Isaac Malemelo</span>
            <span className="handle">@imalemelo</span>
        </span>
     );
 }


function Tweet(){
    return (
        <div className="tweet">
            <Avatar/>
            <div className="content">
                <Author/>
                <Message/>
            </div>
        </div>
    );
}



reactDom.render(<Tweet/>, document.querySelector('#root'));