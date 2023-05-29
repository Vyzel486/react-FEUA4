import { useState } from "react";
import "./Background.css";

function Background() {
  const [text, setText] = useState('');
  let backgroundColor = '';

  if (text.length < 3) {
    backgroundColor = 'white';
  } else if (text.length < 6) {
    backgroundColor = 'yellow';
  } else if (text.length < 9) {
    backgroundColor = 'green';
  } else {
    backgroundColor = 'red';
  }

  return (
    <div className={backgroundColor}>
      <input type="text" onChange={(e) => setText(e.target.value)}/>
    </div>
  );
}

export default Background