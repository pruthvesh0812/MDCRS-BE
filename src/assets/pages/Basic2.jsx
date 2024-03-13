import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

export default function Basic2() {
    const diseases = [
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
        {}
      ]

      const allergies =[
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
        {label:'Heart Disease', disease:'Heart Disease', value:'Heart Disease'},
        {label:'Stroke', disease:'Stroke', value:'Stroke'},
        {label:'Cancer', disease:'Cancer', value:'Cancer'},
        {label:'Type 2 diabetes', disease:'Type 2 diabetes', value:'Type 2 diabetes'},
        {label:'Arthritis', disease:'Arthritis', value:'Arthritis'},
        {label:'Osteoporosis', disease:'Osteoporosis', value:'Osteoporosis'},
        {label:'Asthma', disease:'Asthma', value:'Asthma'},
        {label:'Chronic Kidney Disease', disease:'CKD', value:'CKD'},
        {label:'Hypertension / High Blood Pressure', disease:'Hypertension', value:'Hypertension'},
        {label:'High Cholestrol', disease:'Cholestrol', value:'Cholestrol'},
        {label:'Irritable Bowel Syndrome', disease:'IBS', value:'IBS'},
        {label:'Kidney Stones', disease:'Kidney Stones', value:'Kidney Stones'},
        {}
      ]

  const [disease, setDisease] = useState('')
  const [allergy, setAllergy] = React.useState('');
  const [history, setHistory] = React.useState('');


  const handleDisease = (data) => {
    setDisease(data);
  }

  const handleAllergy = (data) => {
    setAllergy(data);
  };

  const handleHistory = (data) => {
    setHistory(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div  className='mx-[30%] my-[10%]'>
    <form onSubmit={handleSubmit}>
      <h3  className='font-Roboto text-sm mb-1'>Are you undergoing any of the chronic illnesses?</h3>
        <div className=''>
          <Select
            // label="Do you have any known Vitamin deficiencies?"
            options={diseases}
            value={disease}
            placeholder='Select chronic diseases'
            onChange={handleDisease}
            isMulti
            isSearchable={true}
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
            isMulti
            isSearchable={true}
          />
        </div> 

        <h3  className='font-Roboto text-sm mb-1'>Do you have a family history of the following illnesses?</h3>

        <div className=''>
          <Select
            // label="Do you have any known Vitamin deficiencies?"
            options={histories}
            value={history}
            placeholder='Select chronic diseases'
            onChange={handleHistory}
            isMulti
            isSearchable={true}
            
          />
        </div>    

           
        <Link to='/basic3'>
          <button type="submit">Submit</button>
        </Link>
        </form>
    </div>
  )
}
