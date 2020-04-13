import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

const TrackList = ({tracks, onAdd, isRemoval}) => {
  return (
    <div>
      {tracks.map((track) => (
        <Track isRemoval={isRemoval} onAdd={onAdd} key={track.id} track={track} />
      ))}
      <div className="TrackList"></div>
    </div>
  )
}
export default TrackList
