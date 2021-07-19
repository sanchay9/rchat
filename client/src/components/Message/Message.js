import React from 'react';

import './Message.css';

const Message = ({message: {user, text}, name}) => {
    let isSentbyCurUser = false;

    const fName = name.trim().toLowerCase();

    if (user === fName) {
        isSentbyCurUser = true;
    }

    return (
        isSentbyCurUser ? (
            <div className = "messageContainer justifyEnd">
                <p className = "sentText pr-10">
                    {fName}
                </p>
                <div className = "messageBox backgroundBlue">
                    <p className = "messageText colorWhite">
                        {text}
                    </p>
                </div>
            </div>
        ) : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">
                        {text}
                    </p>
                </div>
                    <p className="sentText pl-10">
                        {user}
                    </p>
            </div>
        )
    )
}

export default Message;