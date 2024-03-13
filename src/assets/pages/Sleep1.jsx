import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

export default function Sleep1() {
  const [sleepHour, setSleepHour] = useState('');
  const [status, setStatus] = useState('');
  const [isFormValid, setIsFormValid] = useState(false); // State for form validation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleSleepHour = (data) => {
    setSleepHour(data);
    setIsFormValid(data !== '' && status !== ''); // Update form validation state
  };

  const handleStatus = (data) => {
    setStatus(data);
    setIsFormValid(data !== '' && sleepHour !== ''); // Update form validation state
  };

  const sleepHours = [
    { label: 'Hardly 1-2 hours', sleepHour: 'Hardly 1-2 hours', value: 'Hardly 1-2 hours' },
    { label: 'Less than 5 hours', sleepHour: 'Less than 5 hours', value: 'Less than 5 hours' },
    { label: '5-7 hours per day', sleepHour: '5-7 hours per day', value: '5-7 hours per day' },
    { label: '7-9 hours per day', sleepHour: '7-9 hours per day', value: '7-9 hours per day' },
    { label: 'More than 9 hours', sleepHour: 'More than 9 hours', value: 'More than 9 hours' },
  ];

  const smokeStatus = [
    { label: 'Never', status: 'Never', value: 'Never' },
    { label: 'Smoke occasionally', status: 'Smoke occasionally', value: 'Smoke occasionally' },
    { label: 'Consume alcohol occasionally', status: 'Consume alcohol occasionally', value: 'Consume alcohol occasionally' },
    { label: 'Smoke frequently', status: 'Smoke frequently', value: 'Smoke frequently' },
    { label: 'Consume alcohol frequently', status: 'Consume alcohol frequently', value: 'Consume alcohol frequently' },
  ];

  return (
    <div className='mx-[30%] my-[10%]'>
      <form onSubmit={handleSubmit}>
        <div className='mt-10'>
          <h3 className='font-Roboto text-sm mb-1'>How many hours of uninterrupted sleep do you get per night?</h3>
          <Select
            options={sleepHours}
            value={sleepHour}
            placeholder='Select number of sleep hours'
            onChange={handleSleepHour}
            isSearchable={true}
          />
        </div>
        <div className='mt-5'>
          <h3 className='font-Roboto text-sm mb-1'>Do you smoke or consume alcohol?</h3>
          <Select
            options={smokeStatus}
            value={status}
            placeholder='Select your smoking and alcohol status'
            onChange={handleStatus}
            isMulti={status && status.value !== 'Never'}
            isSearchable={true}
          />
        </div>
        <Link to=''>
          <button type='submit' className='rounded-md bg-green-900 px-5 py-2 text-white mt-5' disabled={!isFormValid}>Submit</button>
        </Link>
      </form>
    </div>
  );
}
