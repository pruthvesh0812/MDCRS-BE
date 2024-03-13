import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select'
import { dietContext } from '../../App';

export default function Exercise1() {
  const [duration, setduration] = React.useState('');
  const [symptom, setsymptom] = React.useState('');
  const [diet, setDiet] = useContext(dietContext)
  const [bone, setbone] = useContext(dietContext)


  const handleSubmit = (e) => {
      e.preventDefault();
    }

  const handleduration = (data) => {
    setduration(data);
  }

  
  const handlesymptom = (data) => {
    setsymptom(data);
    };

    const handlebone = (data) => {
      setbone(data);
      };

  const durations =[
    {label:'90-150 minutes per week', duration:'90-150 minutes per week',value:'90-150 minutes per week'},
    {label:'More than 150 minutes per week', duration:'More than 150 minutes per week',value:'More than 150 minutes per week'},
    {label:'Less than 90 minutes per week', duration:'Less than 90 minutes per week',value:'Less than 90 minutes per week'},
    {label:'Rarely or never', duration:'Rarely or never',value:'Rarely or never'},
  ]

  const allergies =[
    {label:'Chest pain', symptom:'chest pain',value:'chest pain'},
    {label:'Dizziness ', symptom:'Dizziness',value:'Dizziness'},
    {label:'Shortness of breath ', symptom:'Shortness of breath',value:'Shortness of breath'},
    {label:'Headache ', symptom:'Headache',value:'Headache'}
  ]

  const bone_options =[
    {label:'Wrist discomfort', bone:'Wrist discomfort',value:'Wrist discomfort'},
    {label:'Elbow pain', bone:'Elbow pain',value:'Elbow pain'},
    {label:'Lower back pain', bone:'Lower back pain',value:'Lower back pain'},
    {label:'Neck pain', bone:'Neck pain',value:'Neck pain'},
    {label:'Shoulder discomfort', bone:'Shoulder discomfort',value:'Shoulder discomfort'},
    {label:'Knee pain', bone:'Knee pain',value:'Knee pain'},
    {label:'Shin splints', bone:'Shin splints',value:'Shin splints'},
    {label:'Elbow tendinitis', bone:'Elbow tendinitis',value:'Elbow tendinitis'},
    {label:'Achilles tendonitis', bone:'Achilles tendonitis',value:'Achilles tendonitis'},
    {label:'Carpel tunnel syndrome', bone:'Carpel tunnel syndrome',value:'Carpel tunnel syndrome'},
    {label:'Sciatica', bone:'Sciatica',value:'Sciatica'},
    {label:'Osteoarthritis', bone:'Osteoarthritis',value:'Osteoarthritis'},
    {label:'General joint stiffness', bone:'General joint stiffness',value:'General joint stiffness'},
  ]


  return (
    <div  className='mx-[30%] my-[10%]'>
      <form onSubmit={handleSubmit}>
      <div className='mt-10 '>
      <h3  className='font-Roboto text-sm mb-1'>Can you describe your duration of exercise?</h3>
      <Select
            options={durations}
            value={duration}
            placeholder='Select duration of exercise'
            onChange={handleduration}
            isMulti
            isSearchable={true}
          />
        
      </div>
      <div className='mt-5'>
      <h3  className='font-Roboto text-sm mb-1'>Do you experience any of these symptoms while exercising?</h3>
        <div className=''>
          <Select
            options={allergies}
            value={symptom}
            placeholder='Select if you experience any symptoms'
            onChange={handlesymptom}
            isMulti
            isSearchable={true}
          />
        </div> 
        </div>   
      <div className='mt-5'>
      <h3  className='font-Roboto text-sm mb-1'>If you experience joint or bone problem, please mention below.</h3>
        
        <div className=''>
          <Select
            options={bone_options}
            value={bone}
            placeholder='Select physical limitations'
            onChange={handlebone}
            isMulti
            isSearchable={true}
          />
          
        </div>
      </div>
      <Link to=''>
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  )
}





