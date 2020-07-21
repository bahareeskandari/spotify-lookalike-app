import React, {useState} from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../util/Spotify'

function App() {
  const [searchResults, setSearchResults] = useState({
    results: [],
    playlistName: 'My Playlist',
    playlistTracks: [],
  })

  const addTrack = (track) => {
    //if track exits in playlist do nothing, otherwise add track to playlist
    if (searchResults.playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return
    }
    setSearchResults({...searchResults, playlistTracks: [...searchResults.playlistTracks, track]})
  }

  const removeTrack = (track) => {
    setSearchResults({
      ...searchResults,
      playlistTracks: searchResults.playlistTracks.filter((savedTrack) => savedTrack !== track),
    })
  }

  const updatePlaylistName = (name) => {
    setSearchResults({...searchResults, playlistName: name})
  }

  const savePlaylist = () => {
    console.log('hshhshs')
    const trackUris = searchResults.playlistTracks.map((track) => track.uri)
    Spotify.savePlayList(searchResults.playlistName, trackUris).then(() => {
      setSearchResults({...searchResults, playlistName: 'New Playlist', playlistTracks: []})
    })
  }

  const search = (term) => {
    Spotify.search(term).then((searchResultss) => {
      setSearchResults({...searchResults, results: searchResultss})
    })
  }

  return (
    <div>
      <h1>
        Bahares<span className="highlight">Spotify</span>Look<span className="highlight">Alike</span>App
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults onAdd={addTrack} searchResults={searchResults.results} />
          <Playlist
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            playlistName={searchResults.playlistName}
            playlistTracks={searchResults.playlistTracks}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  )
}

export default App
