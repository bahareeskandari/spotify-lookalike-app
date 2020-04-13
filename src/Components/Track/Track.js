import React from 'react'
import './Track.css'

const Track = ({track, onAdd, isRemoval}) => {
  const addTrack = () => {
    console.log(track)

    onAdd(track)
  }

  const renderAction = () => {
    if (isRemoval) {
      return <button className="Track-action">-</button>
    } else {
      return (
        <button onClick={() => addTrack()} className="Track-action">
          +
        </button>
      )
    }
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  )
}
export default Track
