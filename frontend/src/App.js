import './App.css';
import Card from './components/Card';
import useMovies from './hooks/useMovies';

export default function App() {
  const movies = useMovies()

  return (
    <div className="container">
      <div className="row">
        { movies.map(({ slug, cover, title, genres }) =>
          <Card
            key = { slug }
            cover = { cover }
            title = { title }
            genres = { genres }
          />
        )}
      </div>
    </div>
  );
}