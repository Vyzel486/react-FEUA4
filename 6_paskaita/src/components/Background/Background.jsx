import { useState } from "react";
import "./Background.css";

function Background() {
  const [text, setText] = useState('');

  const getBackgroundColor = (textLength) => {
    if (textLength < 3) {
      return 'white';
    } else if (textLength < 6) {
      return 'yellow';
    } else if (textLength < 9) {
      return 'green';
    } else {
      return 'red';
    }
  }

  const backgroundColor = getBackgroundColor(text.length);

  return (
    <div className={backgroundColor}>
      <input type="text" onChange={(e) => setText(e.target.value)}/>
    </div>
  );
}

export default Background;
