import React, {useState} from 'react'
import TrackList from '../TrackList/TrackList'
import './Playlist.css'

const Playlist = ({playlistName, onAdd, playlistTracks}) => {
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} />
      <TrackList isRemoval={false} onAdd={onAdd} tracks={playlistTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>cdef
    </div>
  )
}
export default Playlist
