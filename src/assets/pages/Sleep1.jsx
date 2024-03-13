import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select'
import { dietContext } from '../../App';

export default function Sleep1() {
  const [sleep_hour, setsleep_hour] = React.useState('');
  const [status, setstatus] = React.useState('');
  const [diet, setDiet] = useContext(dietContext)
  const [bone, setbone] = useContext(dietContext)


  const handleSubmit = (e) => {
      e.preventDefault();
    }

  const handlesleep_hour = (data) => {
    setsleep_hour(data);
  }

  
  const handlestatus = (data) => {
    setstatus(data);
    };

    const handlebone = (data) => {
      setbone(data);
      };

  const sleep_hours =[
    {label:'hardly 1-2 hours', sleep_hour:'hardly 1-2 hours',value:'hardly 1-2 hours'},
    {label:'less than 5 hours', sleep_hour:'less than 5 hours',value:'less than 5 hours'},
    {label:'5-7 hours per day', sleep_hour:'5-7 hours per day',value:'5-7 hours per day'},
    {label:'7-9 hours per day', sleep_hour:'7-9 hours per day',value:'7-9 hours per day'},
    {label:'more than 9 hours', sleep_hour:'more than 9 hours',value:'more than 9 hours'},
  ]

  const smoke_status =[
    {label:'Never', status:'Never',value:'Never'},
    {label:'Smoke ocassionaly ', status:'Smoke ocassionaly',value:'Smoke ocassionaly'},
    {label:'Consume alcohol ocassionally ', status:'Consume alcohol ocassionally',value:'Consume alcohol ocassionally'},
    {label:'Smoke frequently', status:'Smoke frequently',value:'Smoke frequently'},
    {label:'Consume alcohol frequently', status:'Consume alcohol frequently',value:'Consume alcohol frequently'}
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
      <h3  className='font-Roboto text-sm mb-1'>How many hours of uninterrupted sleep do you get per night?</h3>
      <Select
            options={sleep_hours}
            value={sleep_hour}
            placeholder='Select number of sleep hours'
            onChange={handlesleep_hour}
            isMulti
            isSearchable={true}
          />
        
      </div>
      <div className='mt-5'>
      <h3  className='font-Roboto text-sm mb-1'>Do you smoke or consume alcohol?</h3>
        <div className=''>
          <Select
            options={smoke_status}
            value={status}
            placeholder='Select your smoking and alcohol status'
            onChange={handlestatus}
            isMulti
            isSearchable={true}
          />
        </div> 
        </div>   
      {/* <div className='mt-5'>
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
      </div> */}
      <Link to=''>
        <button type='submit' className='rounded-md bg-green-900 px-5 py-2 text-white mt-5'>Submit</button>
        </Link>
      </form>
    </div>
  )
}





