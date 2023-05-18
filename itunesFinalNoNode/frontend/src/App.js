import './App.css';
import { useState, useEffect } from "react"
import SearchForm from "./components/SearchForm"
import SearchedList from "./components/SearchedList"
import axios from "axios";

function App() {
  //set states
  const [allMedia, setAllMedia] = useState([])
	const [favourites, setFavourites] = useState([]);

  //fetches the info from API
  const getMedia = async(params) => {
    //uses the parameters to connect to the backend and GET info 
    await axios.get(`http://localhost:3001/search?term=${params.term}&media=${params.media}&limit=${params.limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res)=> {
        const added = res.data.results;
        setAllMedia(added)
      })
      .catch((err)=> {
        console.log('front error', err)
      })
  }
  //gets favourites form local storage and adds to favourite list
  useEffect(() => {
		const favourited = JSON.parse(
			localStorage.getItem('favourited')
		);
		if (favourited) {
			setFavourites(favourited);
		}
	}, []);

  //function to set favorites to local storage
	const saveToLocalStorage = (items) => {
		localStorage.setItem('favourited', JSON.stringify(items));
	};

  //function to add a favourite
	const addFavourite = (media) => {
		const newFavouriteList = [...favourites, media];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

  //function to remove a favourite
	const removeFavourite = (media) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.trackId !== media.trackId
		);
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);

	};
  
  //returns search component and list of searched items and favourites
  return (
    <div className="App">
      <h1>iTunes<ion-icon name="musical-notes-sharp"></ion-icon></h1>
      <SearchForm searchSong={getMedia} />
      <div className='row'>
        <h4 className="results">Here are the top results:</h4>
        <h4>Your favourites:</h4>
      </div>
      <div className='row'>
          <SearchedList allMedia={allMedia} handleFavouritesClick={addFavourite}/>
          <SearchedList allMedia={favourites} handleFavouritesClick={removeFavourite}/>
      </div>
    </div>
  );
}

export default App;
