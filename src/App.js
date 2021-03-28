import './App.css';
import TvShows  from "./components/tvshows"
import Songs  from "./components/songs"
import Movies  from "./components/movies"
import AddSong  from "./components/addsong"

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

   const AddSongHocs=Hoc(
     AddSong ,data.songs//.concat()
   )

function App() {
console.log(data["movies"])

  return (
    <div className="App">
     <TvshowsHocs/>
     <SongsHoc/>
     <MoviesHocs/>
     <AddSongHocs/>
    </div>
  );
}

export default App;
