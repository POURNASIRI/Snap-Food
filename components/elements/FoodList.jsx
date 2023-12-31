
'use client'

import React from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import FoodCardWrapper from './FoodCardWrapper';

export default  function FoodList ({foods, fcomments}) {

  
  const search = useSearchParams();

  const getSearch = search.get("search")

  const url = useParams()

   
  

  

  return (
    <div className='border-borders-xs   border-surface-dark rounded-md overflow-hidden bg-surface-light flex flex-col justify-start sx:w-[100%] lg:w-[100%] '> 
      <div className='flex flex-col md:flex-row flex-wrap '>
        <FoodCardWrapper foods={foods} fcomments={fcomments} getSearch={getSearch} url={url}/>
  
      </div>
    </div>
  )
}
