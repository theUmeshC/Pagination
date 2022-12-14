import { Pagination } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import Dashboard from './Component/Dashboard'
import fetchData from './Helper/fetch'
import SearchIcon from '@mui/icons-material/Search';

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
  const searchRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    const getImages = async () => {
      const result = await fetchData('', 1)
      return result
    }
    void getImages().then((images) => {
      const item = images.photos
      setPhotos(item)
    })
  }, [])

  const handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void = (event, page) => {
    const getImages = async () => {
      const query = searchRef.current?.value
      console.log(query);
      if (query !== undefined) {
        const result = await fetchData(query, page)
        return result
      } else {
        const result = await fetchData('', page)
        return result
      }
    }
    void getImages().then((images) => {
      const item = images.photos
      setPhotos(item)
    })
  }

  const searchHandle: (e: React.MouseEvent<HTMLElement>) => void = (e) => {
    console.log(searchRef.current?.value);
    const getImages = async () => {
      const query = searchRef.current?.value;
      if (query !== undefined) {
        const result = await fetchData(query, 1)
        return result
      } else {
        const result = await fetchData('', 1)
        return result
      }
    }
    void getImages().then((images) => {
      const item = images.photos
      console.log(item);
      setPhotos(item)
    })
  }

  return (
    <div className="App">
       <div className="nav">
          <div className="searchBar">
          <input type="text" ref={searchRef} placeholder="Search Here" />
          <button onClick={searchHandle}><SearchIcon /></button>
          </div>
       </div>
      <Dashboard value = { photos }/>
      <div className="footer">
        <Pagination className="pagination" count={10} color="primary" onChange={handlePageChange} />
      </div>
    </div>
  )
}

export default App;
