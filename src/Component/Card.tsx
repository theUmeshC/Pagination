import { IconButton } from '@mui/material';
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { fetchedArray } from '../App';
import JsFileDownloader from 'js-file-downloader';

interface props {
  items: fetchedArray
};

const Card: React.FC<props> = ({ items }) => {
  const [classList, setClassList] = React.useState('download_btn')
  const downloadHandler = (src: string) => {
    console.log(src);
    new JsFileDownloader({
      url: src
    })
      .then(function () {
      // Called when download ended
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='card_wrapper' key={Math.random()} onMouseEnter={() => setClassList('download_btn visibleBtn')}
    onMouseLeave={() => setClassList('download_btn')} >
        <LazyLoadImage src={items.src.original} alt="" className='image' loading='lazy'/>
        <IconButton aria-label="delete" className={classList} id={items.src.original} onClick= {() => {
          downloadHandler(items.src.original)
        }}>
          <ArrowDownwardIcon className='download_btn_icon'/>
        </IconButton>
    </div>
  )
}

export default Card;
