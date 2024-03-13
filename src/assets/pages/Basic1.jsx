import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';


const Basic1 = () => {


  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [isPregnant, setIsPregnant] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the collected data, such as sending it to a server or logging it
    console.log({
      age,
      gender,
      isPregnant,
      weight,
      height
    });
  };

  return (
    <div className='ml-[30%] my-[10%]'>
      {/* <h2>Basic Questionnaire</h2> */}
      <form onSubmit={handleSubmit}>
      <div  className='mt-5 fle'>
        <h3 className='font-Roboto text-sm mb-1'>
          Age</h3>
          <input type="text" value={age} placeholder="Enter age in years" onChange={(e) => setAge(e.target.value)} 
            className='h-8 border border-blue-500 px-3 py-2 rounded  focus:outline-none focus:border-blue-700 w-1/2 '
                      />
        
        </div>
        <br />

        <div className='mt-5'>
        <h3  className='font-Roboto text-sm mb-1'>
          Gender </h3>
          <form>
            <input type="radio" name="gender" value="male" className='ml-0 '/> Male
            <input type="radio" name="gender" value="female" className='ml-5 '/> Female
            <input type="radio" name="gender" value="other" className='ml-5 '/> Other
        </form>
       
        </div>
        <br />
        <div className='flex'>
        <div className='mt-5'>
        <h3  className='font-Roboto text-sm mb-1'>
          Weight</h3>
          <input type="text" value={weight} placeholder="Enter weight in kgs" onChange={(e) => setWeight(e.target.value)}             className='h-8 border border-blue-500 px-3 py-2 rounded  focus:outline-none focus:border-blue-700  '
/>
        
        </div>

        <br />

        <div className='mt-5 ml-4'>
        <h3  className='font-Roboto text-sm mb-1'>
            Height</h3>
            <input type='text' value={height} placeholder="Enter height in m" onChange={(e) => setHeight(e.target.value)}             className='h-8 border border-blue-500 px-3 py-2 rounded  focus:outline-none focus:border-blue-700  '
/>
        
        </div>
        </div>

        {gender === 'female' && (
          <h3  className='font-Roboto text-sm mb-1'>
            Are you pregnant?
            <input
              type="checkbox"
              checked={isPregnant}
              onChange={() => setIsPregnant(!isPregnant)}
            />
          </h3>
        )}
        <br/>
        
        
        <Link to=''>
          <button type="submit">Submit</button>
        </Link>
        
      </form>
    </div>
  );
};

export default Basic1;

