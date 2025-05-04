import { useState } from 'react';

function Profile() {
  const [name] = useState<string>('Pedro');
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <p>{name}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increase
      </button>
    </>
  );
}

export default Profile;
