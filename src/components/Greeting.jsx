import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <div className="centerme">
      <button onClick={() => setGreeting(randomMessage())}>
        Click me
      </button>
      </div>
      <h3>{greeting}</h3>
      <p>Thank you for visiting!</p>
    </div>
  );
}