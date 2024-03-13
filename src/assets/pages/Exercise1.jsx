import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

export default function Exercise1() {
  const [duration, setDuration] = useState('');
  const [symptom, setSymptom] = useState('');
  const [bone, setBone] = useState('');
  const [isFormValid, setIsFormValid] = useState(false); // State for form validation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleDuration = (data) => {
    setDuration(data);
    setIsFormValid(data !== '' && symptom !== '' && bone !== ''); // Update form validation state
  };

  const handleSymptom = (data) => {
    setSymptom(data);
    setIsFormValid(data !== '' && duration !== '' && bone !== ''); // Update form validation state
  };

  const handleBone = (data) => {
    setBone(data);
    setIsFormValid(data !== '' && duration !== '' && symptom !== ''); // Update form validation state
  };

  const durations = [
    { label: '90-150 minutes per week', duration: '90-150 minutes per week', value: '90-150 minutes per week' },
    { label: 'More than 150 minutes per week', duration: 'More than 150 minutes per week', value: 'More than 150 minutes per week' },
    { label: 'Less than 90 minutes per week', duration: 'Less than 90 minutes per week', value: 'Less than 90 minutes per week' },
    { label: 'Rarely or never', duration: 'Rarely or never', value: 'Rarely or never' },
  ];

  const symptoms = [
    { label: 'Chest pain', symptom: 'Chest pain', value: 'Chest pain' },
    { label: 'Dizziness', symptom: 'Dizziness', value: 'Dizziness' },
    { label: 'Shortness of breath', symptom: 'Shortness of breath', value: 'Shortness of breath' },
    { label: 'Headache', symptom: 'Headache', value: 'Headache' },
  ];

  const boneOptions = [
    { label: 'Wrist discomfort', bone: 'Wrist discomfort', value: 'Wrist discomfort' },
    { label: 'Elbow pain', bone: 'Elbow pain', value: 'Elbow pain' },
    { label: 'Lower back pain', bone: 'Lower back pain', value: 'Lower back pain' },
    { label: 'Neck pain', bone: 'Neck pain', value: 'Neck pain' },
    { label: 'Shoulder discomfort', bone: 'Shoulder discomfort', value: 'Shoulder discomfort' },
    { label: 'Knee pain', bone: 'Knee pain', value: 'Knee pain' },
    { label: 'Shin splints', bone: 'Shin splints', value: 'Shin splints' },
    { label: 'Elbow tendinitis', bone: 'Elbow tendinitis', value: 'Elbow tendinitis' },
    { label: 'Achilles tendonitis', bone: 'Achilles tendonitis', value: 'Achilles tendonitis' },
    { label: 'Carpal tunnel syndrome', bone: 'Carpal tunnel syndrome', value: 'Carpal tunnel syndrome' },
    { label: 'Sciatica', bone: 'Sciatica', value: 'Sciatica' },
    { label: 'Osteoarthritis', bone: 'Osteoarthritis', value: 'Osteoarthritis' },
    { label: 'General joint stiffness', bone: 'General joint stiffness', value: 'General joint stiffness' },
  ];

  return (
    <div className='mx-[30%] my-[10%]'>
      <form onSubmit={handleSubmit}>
        <div className='mt-10'>
          <h3 className='font-Roboto text-sm mb-1'>Can you describe your duration of exercise?</h3>
          <Select
            options={durations}
            value={duration}
            placeholder='Select duration of exercise'
            onChange={handleDuration}
            isMulti
            isSearchable={true}
          />
        </div>
        <div className='mt-5'>
          <h3 className='font-Roboto text-sm mb-1'>Do you experience any of these symptoms while exercising?</h3>
          <Select
            options={symptoms}
            value={symptom}
            placeholder='Select if you experience any symptoms'
            onChange={handleSymptom}
            isMulti
            isSearchable={true}
          />
        </div>
        <div className='mt-5'>
          <h3 className='font-Roboto text-sm mb-1'>If you experience joint or bone problem, please mention below.</h3>
          <Select
            options={boneOptions}
            value={bone}
            placeholder='Select physical limitations'
            onChange={handleBone}
            isMulti
            isSearchable={true}
          />
        </div>
        <Link to=''>
          <button type='submit' className='rounded-md bg-green-900 px-5 py-2 text-white mt-5' disabled={!isFormValid}>Submit</button>
        </Link>
      </form>
    </div>
  )
}
