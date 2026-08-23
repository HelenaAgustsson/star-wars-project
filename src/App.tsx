import './App.css'
import { useEffect, useState } from 'react'
import getFilms from './api/getFilms';
import type { Film } from './types/film';

function App() {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadFilms() {
      try {
        const res = await getFilms();
        setFilms(res);
      } catch (err) {
        console.log(err);
        setError("We are having trouble fetching the films right now. Please try again later.");
      } finally {
        setLoading(false);
      }

    }

    loadFilms();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="App">

    </div>
  );
}

export default App
