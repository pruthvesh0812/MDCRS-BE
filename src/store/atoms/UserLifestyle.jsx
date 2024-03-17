import {atom} from 'recoil'

user_lifestyle = {
    Family_Diabetes: -1,  // 0: No family history of diabetes +
    BMI: -1,  // BMI value +
    Alcohol: -1,  // 0: Non-drinker, 1: Drinker +
    Sleep: -1,  // Hours of sleep per day +
    RegularMedicine: -1,  // 0: + Does not take regular medicine, 1: Takes regular medicine
    Pregancies: -1,  // Number of pregnancies (if applicable) +
    Pdiabetes: -1,  // 0: No history of previous diabetes +
    Age: -1,  // 0 or 1 based on users age range +
    Gender: -1,  // 0: Male, 1: Female +
    PhysicallyActiveDuration: -1,  // +  0 or 1 based on users physical activity level
    JunkFood:-1, // +
    Stress:-1, //+
    UriationFreq:-1, //+
    BP:-1, //+
    Income:-1, // +
    HighChol:-1, //+
    CholCheck: -1, // Had a cholesterol check in the last 5 years +
    SmokingStatus: -1, // +
    PhysActivity: -1, // Engaged in physical activity in the past 30 days +
    Fruits: -1, // Consumes fruit 1 or more times per day +
    Veggies: -1, // Consumes vegetables 1 or more times per day +
    HvyAlcoholConsump: -1, // No heavy alcohol consumption +
    AnyHealthcare: -1, // Has healthcare coverage +
    NoDocbcCost: -1, // No cost barrier to seeing a doctor +
    GenHlth: -1, // General health is good
    MentHlth: -1, // No days of poor mental health in the past 30 days
    PhysHlth: -1, // No physical illness or injury in the past 30 days
    DiffWalk: -1, // No difficulty walking or climbing stairs +
    Education: -1, // High school graduate +
    Diabetes_binary: -1, // after diabetes risk prediction
    hypertension: -1, // Binary: 1 = Yes, 0 = No +
    heart_disease: -1, // Binary: 1 = Yes, 0 = No
    avg_glucose_level: -1, // Average glucose level in mg/dL
    ever_married: -1, // Binary: 1 = No, 0 = Yes +
    work_type: -1, // Govt_job,Private,Self-employed,children,Never_worked +
    Residence_type: -1, // Binary: 1 = Rural, 0 = Urban +
 
  }

  
  

export const PredictNow = atom({
    key:'PredictNow',
    default:user_lifestyle
})