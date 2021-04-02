import './App.css';
import TvShows  from "./components/tvshows"
import Songs  from "./components/songs"
import Movies  from "./components/movies"
import AddSong  from "./components/movies"

import Hoc from './hoc'
import data from './data'
 
   const TvshowsHocs=  Hoc(
     TvShows,data.shows
   )   

   const   SongsHoc =Hoc(
     Songs,data.songs,

   )   


   const MoviesHocs=Hoc(
     Movies,data.movies
   )


   const AddSongsHoc=Hoc(
     AddSong,data.songs
   )



function App() {

  return (
    <div className="App">
     <TvshowsHocs/>
     <SongsHoc/>
     <MoviesHocs/>
     <Movies/>
     <Songs/>
    </div>
  );
}

export default App;
