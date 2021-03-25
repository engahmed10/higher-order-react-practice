import logo from './logo.svg';
import './App.css';
import TvShows  from "./components/tvshows"
import Songs  from "./components/songs"
import Movies  from "./components/movies"
import Hoc from './hoc'

  const  movies = [
                {id:1,name:"Fast & Furious 9"},{id:2,name:"The Sucide Squad"},
                {id:3,name:"No Time To Die"},{id:4,name:"The Little Things"}
            ]

const  songs = [ 
                {id:1,name:"Rain on Me"},{id:2,name:"Boyle Sever Kahramn Deniz" },{id:3,name:"Beatiful Mistakes"},{id:4,name:"Anyone"}
            ]
const    shows=[
                {id:1,name:"Ezel"},{id:2,name:"Friends"},{id:3,name:"Dirilish Osman"},{id:4,name:"Breaking Bad"}
            ]

   const TvshowsHocs=  Hoc(
     TvShows,shows
   )   

   const   SongsHoc =Hoc(
     Songs,songs
   )   


   const MoviesHocs=Hoc(
     Movies,movies
   )

function App() {


  return (
    <div className="App">
     <TvshowsHocs/>
     <SongsHoc/>
     <MoviesHocs/>
    </div>
  );
}

export default App;
