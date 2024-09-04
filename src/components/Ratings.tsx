'use client'

import { Rating as ReactRating } from '@smastrom/react-rating'

interface props{
    rating:number
}

export default function Rating({rating}:props) { 

  return <ReactRating style={{ maxWidth: 100 }} value={rating} readOnly />
}