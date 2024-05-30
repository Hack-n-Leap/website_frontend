import React from 'react';

// Fonction pour convertir le temps en heures, minutes, secondes
const formatTime = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs}h ${mins}m ${secs}s`;
};

// Composant Server pour la récupération des données
async function getData() {
  const response = await fetch('http://localhost:3001/api/leaderboard/getAll', {
    next: { revalidate: 10 } // revalidates the data every 10 seconds
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

// Composant de la page Leaderboard
export default async function LeaderboardPage() {
  let leaderboard;
  try {
    leaderboard = await getData();
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <main>
        <h1>Leaderboard</h1>
        <table>
          <thead>
            <tr>
              <th>Rang</th>
              <th>Pseudo</th>
              <th>Temps</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry) => (
              <tr key={entry.rank}>
                <td>{entry.rank}</td>
                <td>{entry.pseudo}</td>
                <td>{formatTime(entry.time)}</td>
                <td>{new Date(entry.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
