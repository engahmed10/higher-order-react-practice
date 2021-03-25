import logo from './logo.svg';
import './App.css';
import TvShows  from "./components/tvshows"
import Songs  from "./components/songs"
import Movies  from "./components/movies"
import Hoc from './hoc'
import data from './data'

 

   const TvshowsHocs=  Hoc(
     TvShows,data.shows
   )   

   const   SongsHoc =Hoc(
     Songs,data.songs
   )   


   const MoviesHocs=Hoc(
     Movies,data.movies
   )

function App() {
console.log(data["movies"])

  return (
    <div className="App">
     <TvshowsHocs/>
     <SongsHoc/>
     <MoviesHocs/>
    </div>
  );
}

export default App;
