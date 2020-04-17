import React from 'react'
import './Track.css'

const Track = ({track, onAdd, onRemove, isRemoval}) => {
  const renderAction = () => {
    if (isRemoval) {
      return (
        <button onClick={() => onRemove(track)} className="Track-action">
          -
        </button>
      )
    } else {
      return (
        <button onClick={() => onAdd(track)} className="Track-action">
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
