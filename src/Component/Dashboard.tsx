import React from 'react'
import { fetchedArray } from '../App';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface props {
  value: fetchedArray[] | undefined
};

const Dashboard: React.FC<props> = ({ value }) => {
  return (
    <div className='dashboard'>
        {
          value?.map((items) => {
            return (
            <div key={Math.random()}>
                <LazyLoadImage src={items.src.original} alt="" className='image' loading='lazy'/>
            </div>
            )
          })
        }
    </div>
  )
}

export default Dashboard;
