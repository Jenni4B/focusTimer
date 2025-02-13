import React from 'react';

const TimerDisplay = ({minutes, seconds}) => {
    const displayedMinutes = minutes.toString().padStart(2, '0');
    const displayedSeconds = seconds.toString().padStart(2, '0');

    return (
      <div>
        <h1>{displayedMinutes}:{displayedSeconds}</h1>
      </div>
    );
}

export default TimerDisplay;