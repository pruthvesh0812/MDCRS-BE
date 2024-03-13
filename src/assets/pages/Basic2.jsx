import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

export default function Basic2() {
    const diseases = [
        {label:'None', disease:'None', value:'None'},
        {label:'Heart Disease', disease:'Heart Disease', value:'Heart Disease'},
        {label:'Stroke', disease:'Stroke', value:'Stroke'},
        {label:'Cancer', disease:'Cancer', value:'Cancer'},
        {label:'Depression', disease:'Depression', value:'Depression'},
        {label:'Type 2 diabetes', disease:'Type 2 diabetes', value:'Type 2 diabetes'},
        {label:'Arthritis', disease:'Arthritis', value:'Arthritis'},
        {label:'Osteoporosis', disease:'Osteoporosis', value:'Osteoporosis'},
        {label:'Asthma', disease:'Asthma', value:'Asthma'},
        {label:'Chronic Obstructive Pulmonary Disease (COPD)', disease:'COPD', value:'COPD'},
        {label:'Chronic Kidney Disease', disease:'CKD', value:'CKD'},
        {label:'Oral Disease', disease:'Oral Disease', value:'Oral Disease'},
        {label:'Hypertension / High Blood Pressure', disease:'Hypertension', value:'Hypertension'},
        {label:'High Cholestrol', disease:'Cholestrol', value:'Cholestrol'},
        {label:'Chronic Liver Disease', disease:'Liver', value:'Liver'},
        {label:'Irritable Bowel Syndrome', disease:'IBS', value:'IBS'},
        {label:'Kidney Stones', disease:'Kidney Stones', value:'Kidney Stones'},
        {label:'Thyroid Disorders', disease:'Thyroid Disorders', value:'Thyroid Disorders'},
      ]

      const allergies =[
        {label:'None', allergy:'None',value:'None'},
        {label:'Drug / Medicines', allergy:'Drug / Medicines',value:'Drug / Medicines'},
        {label:'Food', allergy:'Food',value:'Food'},
        {label:'Pollen', allergy:'Pollen',value:'Pollen'},
        {label:'Latex', allergy:'Latex',value:'Latex'},
        {label:'Pet', allergy:'Pet',value:'Pet'},
        {label:'Insect and Pest', allergy:'Insect and Pest',value:'Insect and Pest'},
        {label:'Mold', allergy:'Mold',value:'Mold'},
        {label:'Perfumes / Chemicals', allergy:'Perfumes / Chemicals',value:'Perfumes / Chemicals'}
      ]

      const histories = [
        {label:'None', history:'None', value:'None'},
        {label:'Heart disease', history:'Heart disease', value:'Heart disease'},
        {label:'Stroke', history:'Stroke', value:'Stroke'},
        {label:'Cancer', history:'Cancer', value:'Cancer'},
        {label:'Type 2 diabetes', history:'Type 2 diabetes', value:'Type 2 diabetes'},
        {label:'Arthritis', history:'Arthritis', value:'Arthritis'},
        {label:'Osteoporosis', history:'Osteoporosis', value:'Osteoporosis'},
        {label:'Asthma', history:'Asthma', value:'Asthma'},
        {label:'Chronic Kidney history', history:'CKD', value:'CKD'},
        {label:'Hypertension / High Blood Pressure', history:'Hypertension', value:'Hypertension'},
        {label:'High Cholestrol', history:'Cholestrol', value:'Cholestrol'},
        {label:'Irritable Bowel Syndrome', history:'IBS', value:'IBS'},
        {label:'Kidney Stones', history:'Kidney Stones', value:'Kidney Stones'},
      ]

  const [disease, setDisease] = useState('')
  const [allergy, setAllergy] = React.useState('');
  const [history, setHistory] = React.useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleDisease = (data) => {
    setDisease(data);
    setIsFormValid(data !== '' && allergy !== '' && history !== '');
  }

  const handleAllergy = (data) => {
    setAllergy(data);
    setIsFormValid(data !== '' && disease !== '' && history !== '');
  };

  const handleHistory = (data) => {
    setHistory(data);
    setIsFormValid(data !== '' && disease !== '' && allergy !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can submit the form here
  }

  return (
    <div  className='mx-[30%] my-[10%]'>
    <form onSubmit={handleSubmit}>
      <h3  className='font-Roboto text-sm mb-1'>Are you undergoing any of the chronic illnesses?</h3>
        <div className=''>
          <Select
            options={diseases}
            value={disease}
            placeholder='Select chronic diseases'
            onChange={handleDisease}
            isSearchable={true}
            isMulti={disease && disease.value !== 'None'}
          />
        </div>    

        <br/>
        <h3  className='font-Roboto text-sm mb-1'>Do you have any known allergies?</h3>
        <div className=''>
          <Select
            options={allergies}
            value={allergy}
            placeholder='Select allergies'
            onChange={handleAllergy}
            isSearchable={true}
            isMulti={allergy && allergy.value !== 'None'}
          />
        </div> 

        <h3  className='font-Roboto text-sm mb-1 mt-5'>Do you have a family history of the following illnesses?</h3>

        <div className=''>
          <Select
            options={histories}
            value={history}
            placeholder='Select chronic diseases'
            onChange={handleHistory}
            isSearchable={true}
            isMulti={history && history.value !== 'None'}
          />
        </div>    

           
        <Link to='/'>
        <button type='submit' disabled={!isFormValid} className={`rounded-md px-5 py-2 text-white mt-5 ${isFormValid ? 'bg-green-900' : 'bg-gray-400'}`}>Submit</button>
        </Link>
        </form>
    </div>
  )
}
