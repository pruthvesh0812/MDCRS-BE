import React from 'react'
import { Link } from 'react-router-dom'
import HomeCard from '../components/homeCard'
import { useRecoilValue } from 'recoil'
import { PredictNow } from '../store/atoms/PredictNow'

export default function Home() {
  
  const user_lifestyle = useRecoilValue(PredictNow)
  console.log(user_lifestyle,"user_lifestyle")
  return (
    <div >
      <div className='flex justify-center mt-7'>
        <p className='font-medium text-2xl text-green-950'>We need to know about you, to Properly Diagnose you </p>
      </div>
      <div className='grid grid-cols-3 m-14 mt-7'>
        <HomeCard title="Check if you will be diagnosed with any diseases (Diabetes, Heart, Stroke)"
          buttonTitle="Predict Now"
          linkTo="/"
        />

        <HomeCard title="Start with your Basic information"
          buttonTitle="Go"
          linkTo="/BasicInfo"
        />

        <HomeCard title="Give some details about your Lifestyle"
          buttonTitle="Go"
          linkTo="/lifestyle"
        />


        <HomeCard title="Tell us about your Diet"
          buttonTitle="Go"
          linkTo="/diet"
        />

        <HomeCard title="Add your Medical Details"
          buttonTitle="Go"
          linkTo="/Medical"
        />



        <HomeCard title="Shed some light on your current physical avtivity"
          buttonTitle="Go"
          linkTo="/exercise"
        />



      </div>
    </div>
  )
}
