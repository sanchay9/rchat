import React from 'react';

import closeIcon from '../../icons/closeImage.png';
import onlineIcon from '../../icons/onlineImage.png';

import './InfoBar.css';

const InfoBar = ({room}) => (
    <div className = "infoBar">
        <div className = "leftInnerContainer">
            <img className = "onlineIcon" src = {onlineIcon} width = "30" height = "30" alt = "Online"/>
            <h1>
                <div className = "roomid">
                    RoomID
                </div>
                <div className = "roomname">
                    {room}
                </div>
            </h1>
        </div>
        <div className = "rightInnerContainer">
            <a href = "/">
                <img src = {closeIcon} width = "20" height = "20" alt = "Close Chat"/>
            </a>
        </div>
    </div>
)

export default InfoBar;
