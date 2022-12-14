import React from 'react'
import { fetchedArray } from '../App';

interface props {
  value: fetchedArray[] | undefined
};

const Dashboard: React.FC<props> = ({ value }) => {
  console.log(value);

  return (
    <div className='dashboard'>
        {value?.map((items) => {
          return (
            <div key={Math.random()}>
                {/* {items.id} */}
                {/* {items.src.landscape} */}
                {/* {items.url} */}
                <img src={items.src.original} alt="" className='image'/>
            </div>
          )
        })
        }

    </div>
  )
}

export default Dashboard;
