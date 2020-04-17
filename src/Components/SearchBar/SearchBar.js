import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = ({onSearch}) => {
  const [term, setTerm] = useState('')

  const handleTermChange = (e) => {
    setTerm(e.target.value)
  }

  return (
    <div className="SearchBar">
      <input
        value={term}
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
      <button onClick={() => onSearch(term)} className="SearchButton">
        SEARCH
      </button>
    </div>
  )
}
export default SearchBar
