import { selector } from "recoil";
import { PredictNow } from "../atoms/PredictNow";

const getFilledLifestyleLen = selector({
    key: 'FilledLifestyleLen',
    get: ({ get }) => {
        const lifestyle = get(PredictNow);
        
        return lifestyle.length()
        }
    
});