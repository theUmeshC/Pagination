import React from 'react'
import { fetchedArray } from '../App';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import IconButton from '@mui/material/IconButton';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Card from './Card';

interface props {
  value: fetchedArray[] | undefined
};

const Dashboard: React.FC<props> = ({ value }) => {
  // const [classList, setClassList] = React.useState('download_btn')

  return (
    <div className='dashboard'>
        {
          value?.map((items) => {
            return (
              <div className='card_wrapper' key={Math.random()}>
                <Card items = {items}/>
                {/* <LazyLoadImage src={items.src.original} alt="" className='image' loading='lazy'/>
                <IconButton aria-label="delete" className={classList} id={items.src.original} onClick= {() => {
                  downloadHandler(items.src.original)
                }}>
                  <ArrowDownwardIcon className='download_btn_icon'/>
                </IconButton> */}
            </div>
            )
          })
        }
    </div>
  )
}

export default Dashboard;
