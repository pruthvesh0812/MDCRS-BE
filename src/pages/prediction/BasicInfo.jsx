import React, { useState } from 'react'
import Basic1 from './Basic1'
import Basic4 from './Basic4'

export default function BasicInfo() {
    const [slide, setSlide] = useState(0)
    return (
        <div>
            {
                (slide == 0) ? (
                    <Basic1 />
                ) :
                    (
                        <Basic4 />
                    )
            }
            {/* <h1 className='text-center text-lg font-semibold text-green-800 mb-10'>{slide + 1}</h1> */}
            <div className='-mt-14 flex justify-center gap-2'>

                <button onClick={() => { setSlide(0) }} className='text-lg font-medium text-green-900 bg-green-200 rounded w-20'>Previous</button>
                <button onClick={() => { setSlide(1) }} className='text-lg font-medium text-green-900 bg-green-200 rounded w-20' >Next</button>

            </div>
        </div>
    )
}
