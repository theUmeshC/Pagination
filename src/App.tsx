import { Pagination } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import Dashboard from './Component/Dashboard'
import fetchData from './Helper/fetch'
import SearchIcon from '@mui/icons-material/Search';
import Loader from './Component/Loader';

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
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    setPageNo(1);
    const getImages = async () => {
      const result = await fetchData('', 1)
      return result
    }
    void getImages().then((images) => {
      const item = images.photos
      setTimeout(() => {
        setPhotos(item);
        setLoading(true);
      }, 600)
    })
  }, [])

  const handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void = (event, page) => {
    setPageNo(page);
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
      setTimeout(() => {
        setPhotos(item)
        setLoading(true)
      }, 600)
    })
  }

  const searchHandle: (e: React.MouseEvent<HTMLElement>) => void = (e) => {
    setPageNo(1);
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
      {loading ? (<Dashboard value = { photos }/>) : (<Loader />)}
      <div className="footer">
        <Pagination className="pagination" count={10} color="primary" onChange={handlePageChange} page={pageNo}/>
      </div>
    </div>
  )
}

export default App;
