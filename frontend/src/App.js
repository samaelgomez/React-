import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

var movies = fetch('http://0.0.0.0:8000/api/movies');
console.log(movies);

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <Card 
          title="What is Lorem Ipsum?"
          images="../images/batman.png"
          old_price="9,999"
          newPrice="9999"
          rupess="$"
          alt="batman"
          exp_date="25-10-2020"
        />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}