import {atom} from 'recoil'

const Predictions = {
    diabetesRisk:-1,
    heartRisk:-1,
    strokeRisk:-1,
}

export const DiseasePred = atom({
    key:'DiseasePred',
    default:Predictions
})