import React, { useState } from 'react';

const MoodChecker = () => {
    const [message, setMessage] = useState('Kaip Jaučiatės?');

    const btnClick = (newMessage) => {
        setMessage(newMessage);
    };

    return (
        <div>
            <h2>{message}</h2>
            <button className='moodChecker' onClick={() => btnClick('Nieko tokio, viskas bus gerai')}>Jaučiuosi prastai :(</button>
            <button className='moodChecker' onClick={() => btnClick('Gerai, nujaučiu, kad greitu metu jausitės puikiai')}>Jaučiuosi normaliai :|</button>
            <button className='moodChecker' onClick={() => btnClick('Smagu girdėti, taip ir toliau')}>Jaučiuosi puikiai :)</button>
        </div>
    );
};

export default MoodChecker