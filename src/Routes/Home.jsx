import React from 'react';
import { useContextGlobal } from '../Components/utils/global.context'; 
import Card from '../Components/Card';

const Home = () => {
  const { dentists, theme } = useContextGlobal();

  if (!dentists || dentists.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <main className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;