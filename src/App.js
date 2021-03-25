import logo from './logo.svg';
import './App.css';
import TvShows  from "./components/tvshows"
import Songs  from "./components/songs"
import Movies  from "./components/movies"

function App() {
  return (
    <div className="App">
     <TvShows/>
     <Songs/>
     <Movies/>
    </div>
  );
}

export default App;
