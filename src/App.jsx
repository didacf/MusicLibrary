import { useEffect, useState, useRef } from 'react'
import './App.css'
import Gallery from './Components/Gallery.jsx'
import SearchBar from './Components/SearchBar.jsx'
import { DataContext } from './Context/DataContext'
import { SearchContext } from './Context/SearchContext'


function App ()  {
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])
    let searchInput = useRef('')

    const API_URL = 'https://itunes.apple.com/search?term='
     
    useEffect(() => {
        if (search) {
          const fetchData = async () => {
            document.title = `${search} Music`
            const response = await fetch(API_URL + search)
            const resData = await response.json()
            if (resData.results.length > 0) {
              setData(resData.results)
            } else {
              setMessage("Not found.")
            }
            console.log(resData)
          }
          fetchData()
        }
      }, [search])


    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    return (
        <div className ="App">
          <SearchContext.Provider value ={{
        term: searchInput,
        handleSearch: handleSearch
          
          }}>
            <SearchBar handleSearch={handleSearch} />
            </SearchContext.Provider>
            {message}
            <DataContext.Provider value={data} >
              <Gallery />
            </DataContext.Provider>
        </div>
    )
}

export default App;

