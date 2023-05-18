import React from 'react';
import { useState } from "react"

//this returns the search form to search for media
const SearchForm = (props) => {
    //set states
    const [term, setTerm] = useState("")
    const [media, setMedia] = useState("")
    const [limit, setLimit] = useState(10)

    //gets and sets info from the form
    const searchHandler = (event) => {
        event.preventDefault();
        //ensures everything required is entered
        if(term==="" || media===""){
            alert("Please enter all search terms");
            return
        }
        //these are the parameters required to search
        const params = {
            term: term,
            media: media,
            limit: limit,
        }
        //params are set to state
        props.searchSong(params);
    }

    //media type is selected by radio button, the limit is clicked and the title is entered
    return (
        <div>
            <form onSubmit={searchHandler}>
                <div className="search">
                <label>Search:</label>
                <input className="searchBar" type="text" onChange={(e)=>setTerm(e.target.value)} value={term} ></input>
                </div>
                <div className="mediaTypes">
                <label>Media:</label>
                All <input className="radio" type="radio" name="rdMedia" checked={media==="all"&&"checked"} 
                    value="all" onChange={(e)=>setMedia(e.target.value)}></input>

                Movie <input className="radio" type="radio" name="rdMedia" checked={media==="movie"&&"checked"} 
                    value="movie" onChange={(e)=>setMedia(e.target.value)}></input>

                Music <input className="radio" type="radio" name="rdMedia" checked={media==="music"&&"checked"} 
                    value="music" onChange={(e)=>setMedia(e.target.value)}></input>
                
                TV <input className="radio" type="radio" name="rdMedia" checked={media==="tvShow"&&"checked"} 
                    value="tvShow" onChange={(e)=>setMedia(e.target.value)}></input>
                
                Audiobook <input className="radio" type="radio" name="rdMedia" checked={media==="audiobook"&&"checked"} 
                    value="audiobook" onChange={(e)=>setMedia(e.target.value)}></input>
                
                Software <input className="radio" type="radio" name="rdMedia" checked={media==="software"&&"checked"} 
                    value="software" onChange={(e)=>setMedia(e.target.value)}></input>

                Ebook <input className="radio" type="radio" name="rdMedia" checked={media==="ebook"&&"checked"} 
                    value="ebook" onChange={(e)=>setMedia(e.target.value)}></input>
                </div>
                <label>Limit:</label>
                <input className="limit" type="number" min={1} max={50} onChange={(e)=>setLimit(e.target.value)} value={limit} placeholder="Search..."></input>
                <input className="submit" type="submit" value="Search"></input>
            </form>
        </div>
    )
}

export default SearchForm