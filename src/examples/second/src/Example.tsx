import { useState } from 'react';

function Profile(): JSX.Element {
  const [name] = useState<string>("Cristobal");
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ fontSize: '40px' }}>
      <p>{name}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Profile;
