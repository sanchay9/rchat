import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className = "joinOuterContainer">
            <div className = "joinInnerContainer">
                <h1 className = "welcome">
                    Welcome to rChat
                </h1>

                <h1 className = "heading">
                    Sign In
                </h1>

                <div>
                    <input placeholder = "Enter User Name" className = "joinInput" type = "text" onChange = {(event) => setName(event.target.value)} />
                </div>

                <div>
                    <input placeholder = "Enter Room ID" className = "joinInput mt-20" type = "text" onChange = {(event) => setRoom(event.target.value)} />
                </div>

                <Link onClick = {event => (!name || !room) ? event.preventDefault() : null} to = {`/chat?name=${name}&room=${room}`}>
                    <button className = "button mt-20" type = "submit">
                        ENTER CHAT ROOM
                    </button>
                </Link>

                <h2 className = "ending">
                    <p> Source </p>
                    <a href = "https://github.com/sanchay9/rchat">
                        https://github.com/sanchay9/rchat
                    </a>
                </h2>
            </div>
        </div>
    )
}

export default Join;
