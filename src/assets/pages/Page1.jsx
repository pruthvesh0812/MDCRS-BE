import React from 'react'
import { Link } from 'react-router-dom'

export default function Page1() {
  return (
    <div className='grid grid-cols-3 m-14'>
      <div className='bg-green-100 m-5 p-5 h-[200px] border-1 relative'>
            <h4 className='font-Roboto text-sm'>Check if you will be diagnosed with any diseases</h4>
            <Link>
                <button className='rounded-md bg-green-900 px-5 py-2 text-white absolute bottom-5 disabled'>Predict Now</button>
            </Link>
      </div>
      <div className='bg-green-100 m-5 p-5 h-[200px] border-1 relative'>
            <h4 className='font-Roboto text-sm'>Start with your basic information</h4>
            <Link to='/basic1'>
                <button className='rounded-md bg-green-900 px-5 py-2 text-white absolute bottom-5'>Go</button>
            </Link>
      </div><div className='bg-green-100 m-5 p-5 h-[200px] border-1 relative'>
            <h4 className='font-Roboto text-sm'>Add your medical details</h4>
            <Link to='/basic2'>
                <button className='rounded-md bg-green-900 px-5 py-2 text-white absolute bottom-5'>Go</button>
            </Link>
      </div><div className='bg-green-100 m-5 p-5 h-[200px] border-1 relative'>
            <h4 className='font-Roboto text-sm'>Tell us about your dietary preferances</h4>
            <Link to='/diet'>
                <button className='rounded-md bg-green-900 px-5 py-2 text-white absolute bottom-5'>Go</button>
            </Link>
      </div><div className='bg-green-100 m-5 p-5 h-[200px] border-1 relative'>
            <h4 className='font-Roboto text-sm'>Shed some light on your current physical avtivity</h4>
            <Link to='/exercise'>
                <button className='rounded-md bg-green-900 px-5 py-2 text-white absolute bottom-5'>Go</button>
            </Link>
      </div><div className='bg-green-100 m-5 p-5 h-[200px] border-1 relative'>
            <h4 className='font-Roboto text-sm'>How is your sleep health?</h4>
            <Link>
                <button className='rounded-md bg-green-900 px-5 py-2 text-white absolute bottom-5'>Go</button>
            </Link>
      </div>
    </div>
  )
}
