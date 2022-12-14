import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Dashboard from './Component/Dashboard'
import fetchData from './Helper/fetch'
import { DebounceInput } from 'react-debounce-input'
import searchData from './Helper/Search'

export interface fetchedArray {
  id: number
  src: {
    original: string
  }
  url: string
  photographer: string
}

const App: React.FC = () => {
  const [photos, setPhotos] = useState<fetchedArray[]>()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const getImages = async () => {
      const result = await fetchData(1)
      return result
    }
    void getImages().then((images) => {
      const item = images.photos
      setPhotos(item)
    })
  }, [])

  const handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void = (event, page) => {
    const getImages = async () => {
      const result = await fetchData(page)
      return result
    }
    void getImages().then((images) => {
      const item = images.photos
      setPhotos(item)
    })
  }

  const searchHandle: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setSearchTerm(e.target.value);
    const getImages = async () => {
      const result = await searchData(searchTerm)
      return result
    }
    void getImages().then((images) => {
      const item = images.photos
      setPhotos(item)
    })
    console.log(searchTerm);
  }

  return (
    <div className="App">
       <div className="nav">
          <DebounceInput
            debounceTimeout={500}
            value={searchTerm}
            onChange={searchHandle}
            className="searchBar"
            placeholder="Search Here"
          />
       </div>
      <Dashboard value = { photos }/>
      <div className="footer">
        <Pagination className="pagination" count={10} color="primary" onChange={handlePageChange} />
      </div>
    </div>
  )
}

export default App;
