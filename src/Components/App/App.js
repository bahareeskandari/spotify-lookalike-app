import React, {useState} from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

function App() {
  const [searchResults, setSearchResults] = useState({
    results: [
      {name: 'Ride', artist: 'Lana Del Ray', album: 'Summertime', id: 1},
      {name: 'Thriller', artist: 'MJ', album: 'Billie Jean', id: 2},
    ],
    playlistName: 'playlistname',
    playlistTracks: [
      {name: 'One Day', artist: 'Asaf Avidan', album: 'Reckoning', id: 3},
      {name: 'Jolene', artist: 'Dolly Parton', album: 'Jolene', id: 4},
    ],
  })

  const addTrack = (track) => {
    //if track exits in playlist do nothing, otherwise add track to playlist
    if (searchResults.playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      console.log('not working')
      return
    }
    setSearchResults({...searchResults, playlistTracks: track})
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        {/* <SearchBar /> */}
        <div className="App-playlist">
          <SearchResults onAdd={addTrack} searchResults={searchResults.results} />
          <Playlist
            playlistName={searchResults.playlistName}
            playlistTracks={searchResults.playlistTracks}
          />
        </div>
      </div>
    </div>
  )
}

export default App
