import React from 'react'
import { Link } from 'react-router-dom'
import { PredictNow } from '../store/atoms/PredictNow'
import { useRecoilValue } from 'recoil'

export default function HomeCard({ title, buttonTitle, linkTo }) {
    // const predict = useRecoilValue(PredictNow)
    const predict = true
    if (buttonTitle == "Predict Now") {
        return (

            <div className='bg-green-100 m-5 p-5 h-[200px] border-1 relative shadow-lg'>
                <h4 className='font-Roboto text-xl'>{title}</h4>
                {
                    predict ? (
                        <Link to="/Results">
                            <button className='rounded-md bg-green-900 px-5 py-2 text-white absolute bottom-5 disabled'>{buttonTitle}</button>
                        </Link>
                    ) :
                        (
                            <Link to={linkTo}>
                                <button className='rounded-md bg-green-900 px-5 py-2 text-white absolute bottom-5 disabled'>{buttonTitle}</button>
                            </Link>
                        )
                }

            </div>

        )
    }
    else {
        return (
            <div className='bg-green-100 m-5 p-5 h-[200px] border-1 relative shadow-lg'>
                <h4 className='font-Roboto text-xl'>{title}</h4>
                <Link to={linkTo}>
                    <button className='rounded-md bg-green-900 px-5 py-2 text-white absolute bottom-5 disabled'>{buttonTitle}</button>
                </Link>
            </div>
        );
    }
}