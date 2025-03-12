import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        See another word forbidden by the current administration!
      </button>
      <p>Thank you for visiting!</p>
    </div>
  );
}