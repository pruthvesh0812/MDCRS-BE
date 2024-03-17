import React, { useEffect } from 'react'
import axios from "axios"
import { DiseasePred } from '../../store/atoms/DiseasePred'
import { useSetRecoilState } from 'recoil'
import { useRecoilValue } from 'recoil'
import { PredictNow } from '../../store/atoms/PredictNow'
export default function Results() {

  const user_lifestyle = useRecoilValue(PredictNow)
  const setDiseasePrediction = useSetRecoilState(DiseasePred)
  const diseasePrediction = useRecoilValue(DiseasePred)
  const sendToBE = async () => {
    const res = await axios.post("http://localhost:5000/", user_lifestyle)
    setDiseasePrediction(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    sendToBE()
  }, [])
  return (
    <div className='flex justify-center'>
      <div className='rounded-md h-40 w-3/4 flex flex-col gap-3'>
        <div className={`text-xl font-semibold ${diseasePrediction.diabetesRisk === 1 ? "text-red-700" : "text-green-800"}`}> Your Diabetes Risk
          <label> : {diseasePrediction.diabetesRisk}</label>
        </div>
        <div className={`text-xl font-semibold ${diseasePrediction.heartRisk === 1 ? "text-red-700" : "text-green-800"}`}> Your Heart Risk
          <label> : {diseasePrediction.heartRisk}</label>
        </div>
        <div className={`text-xl font-semibold  ${diseasePrediction.strokeRisk === 1 ? "text-red-700 " : "text-green-800"}`}> Your Stroke Risk
          <label> : {diseasePrediction.strokeRisk}</label>
        </div>
      </div>
    </div>
  )
}
