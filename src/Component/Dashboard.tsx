import React from 'react'
import { fetchedArray } from '../App';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import IconButton from '@mui/material/IconButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import JsFileDownloader from 'js-file-downloader';

interface props {
  value: fetchedArray[] | undefined
};

const Dashboard: React.FC<props> = ({ value }) => {
  const downloadHandler = (src: string) => {
    console.log(src);
    new JsFileDownloader({
      url: src
    })
      .then(function () {
      // Called when download ended
        alert('downloaded successfully');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className='dashboard'>
        {
          value?.map((items) => {
            return (
            <div className='card_wrapper' key={Math.random()} >
                <LazyLoadImage src={items.src.original} alt="" className='image' loading='lazy'/>
                <IconButton aria-label="delete" className='download_btn' id={items.src.original} onClick= {() => {
                  downloadHandler(items.src.original)
                }}>
                  <ArrowDownwardIcon className='download_btn_icon'/>
                </IconButton>
            </div>
            )
          })
        }
    </div>
  )
}

export default Dashboard;
