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
    return (
        <img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar" />
    );
}

const Message = () => {
    return (
        <div className="message">
            I am loving practicing React js for a turing test and job.
        </div>
    );
}

const Author = () => (
    <span className="author">
        <span className="name">Isaac Malemelo</span>
        <span className="handle">@imalemelo</span>
    </span>
);


const Time = () => (
    <span className="time">3h ago</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button" />
);

const LikeButton = () => (
    <i className="fa fa-heart like-button" />
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);



function Tweet() {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <Author />
                <Message />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}



reactDom.render(<Tweet />, document.querySelector('#root'));