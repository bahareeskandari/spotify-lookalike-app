import React, {useState} from 'react'
import TrackList from '../TrackList/TrackList'
import './Playlist.css'

const Playlist = ({playlistName, onSave, onRemove, onNameChange, onAdd, playlistTracks}) => {
  const [playListName, setPlayListName] = useState('')

  return (
    <div className="Playlist">
      <input defaultValue={playlistName} onChange={(e) => onNameChange(e.target.value)} />
      <TrackList onRemove={onRemove} isRemoval={true} onAdd={onAdd} tracks={playlistTracks} />
      <button className="Playlist-save" onClick={() => onSave()}>
        SAVE TO YOUR LIST
      </button>
    </div>
  )
}
export default Playlist
