import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { useSetRecoilState } from 'recoil';
import { PredictNow } from '../../store/atoms/PredictNow';

const Medical = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userResponses, setUserResponses] = useState({
    page1: { question1: '', question2: '', question3: '' },
    page2: { question4: '', question5: '', question6: '' },
    page2: { question7: '', question8: '', question9: '' },
    // Add more pages as needed
  });

  const setUserLifestyle = useSetRecoilState(PredictNow)



  const questions = [
    'Mention if you have any existing medical conditions or chronic illnesess',
    'Mention if you have a family history of any medical conditions or chronic illnesses',
    'Are you undergoing pregnancy or breastfeeding?'


  ];


  const genHealth = [
    { label: 'excellent', status: 'excellent', value: 1 },
    { label: 'very good', status: 'very good', value: 2 },
    { label: 'good', status: 'good', value: 3 },
    { label: 'fair', status: 'fair', value: 4 },
    { label: 'poor', status: 'poor', value: 5 },
  ];

  const handleInputChange = (page, question, answer) => {
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [page]: { ...prevResponses[page], [question]: answer },
    }));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages && areAllQuestionsAnswered(currentPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const areAllQuestionsAnswered = (page) => {
    const pageResponses = userResponses[`page${page}`];
    return Object.values(pageResponses).every((answer) => answer !== '');
  };

  const totalPages = 2; // Set the total number of pages

  return (
    <div className='ml-[30%] my-[10%]'>
      <div className='mt-5'>
        <h3 className='font-Roboto text-md font-semibold  mb-1'>
          Do you have a history of Family Diabetes?
        </h3>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <input type="radio" name="familDiabetes" value={1}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, Family_Diabetes: parseInt(e.target.value) })) }} />
            Yes
          </label>
          <label className='ml-10'>
            <input type="radio" name="familDiabetes" value={0}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, Family_Diabetes: parseInt(e.target.value) })) }} />
            No
          </label>
        </div>
      </div>
      <br />

      <div className='mt-5'>
        <h3 className='font-Roboto text-md font-semibold  mb-1'>
          Are you prediabetic?
        </h3>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <input type="radio" name="prediabetic" value={1}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, Pdiabetes: parseInt(e.target.value) })) }} />
            Yes
          </label>
          <label className='ml-10'>
            <input type="radio" name="prediabetic" value={0}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, Pdiabetes: parseInt(e.target.value) })) }} />
            No
          </label>
        </div>
      </div>
      <br />

      <div className='mt-5'>
        <h3 className='font-Roboto text-md font-semibold mb-1'>
          Do you take regular medicines?
        </h3>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <input type="radio" name="regular medicines" value={1}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, RegularMedicine: parseInt(e.target.value) })) }} />

            Yes
          </label>
          <label className='ml-10'>
            <input type="radio" name="regular medicines" value={0}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, RegularMedicine: parseInt(e.target.value) })) }} />
            No
          </label>
        </div>
      </div>
      <br />

      <div className='mt-5'>
        <h3 className='font-Roboto text-md font-semibold mb-1'>
          Your Urination Frequency
        </h3>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <input type="radio" name="regular_medicines" value="frequent"
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, UriationFreq: e.target.value })) }}
            />
            Frequent
          </label>
          <label className='ml-10'>
            <input type="radio" name="regular_medicines" value="not_much"
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, UriationFreq: e.target.value })) }}
            />
            Not much
          </label>
        </div>
      </div>
      <br />

      <div className='mt-5'>
        <h3 className='font-Roboto text-md font-semibold mb-1'>
          Did you have a cholestrol check in last 5 years
        </h3>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <input type="radio" name="cholestrol_check" value={1}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, CholCheck: parseInt(e.target.value) })) }} />
            Yes
          </label>
          <label className='ml-10'>
            <input type="radio" name="cholestrol_check" value={0}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, CholCheck: parseInt(e.target.value) })) }} />
            No
          </label>
        </div>
      </div>
      <br />

      <div className='mt-5'>
        <h3 className='font-Roboto text-md font-semibold mb-1'>
          Do you have any healthcare coverage
        </h3>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <input type="radio" name="AnyHealthcare" value={1}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, AnyHealthcare: parseInt(e.target.value) })) }} />
            Yes
          </label>
          <label className='ml-10'>
            <input type="radio" name="AnyHealthcare" value={0}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, AnyHealthcare: parseInt(e.target.value) })) }} />
            No
          </label>
        </div>
      </div>
      <br />

      <div className='mt-5'>
        <h3 className='font-Roboto text-md font-semibold mb-1'>
          Did it happen sometimes that you couldnt see a doctor due to money constraints?
        </h3>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <input type="radio" name="NoDocbcCost" value={1}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, NoDocbcCost: parseInt(e.target.value) })) }} />
            Yes
          </label>
          <label className='ml-10'>
            <input type="radio" name="NoDocbcCost" value={0}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, NoDocbcCost: parseInt(e.target.value) })) }} />
            No
          </label>
        </div>
      </div>
      <br />

      <div className='mt-5'>
        <h3 className='font-Roboto text-md font-semibold mb-1'>
          Do you have difficulty walking or climbing stairs
        </h3>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <input type="radio" name="cholestrol_check" value={1}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, DiffWalk: parseInt(e.target.value) })) }} />
            Yes
          </label>
          <label className='ml-10'>
            <input type="radio" name="cholestrol_check" value={0}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, DiffWalk: parseInt(e.target.value) })) }} />
            No
          </label>
        </div>
      </div>
      <br />

      <div className='mt-5'>
        <h3 className='font-Roboto text-md font-semibold mb-1'>
          Do you have hypertension?
        </h3>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <input type="radio" name="hypertension" value={1}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, hypertension: parseInt(e.target.value) })) }} />
            Yes
          </label>
          <label className='ml-10'>
            <input type="radio" name="hypertension" value={0}
              onClick={(e) => { setUserLifestyle((prev) => ({ ...prev, hypertension: parseInt(e.target.value) })) }} />
            No
          </label>
        </div>
      </div>
      <br />

      <form>
        <h3 className='font-Roboto text-md font-semibold my-5'>
          How many pregnancies you had?
        </h3>
        <input type="number" name="numOfPregnancies" value={null} className='h-8 border border-green-500 px-3 py-2 rounded  focus:outline-none focus:border-green-700'
          onChange={(e) => { setUserLifestyle((prev) => ({ ...prev, Pregancies: parseInt(e.target.value) })) }} />

        <h3 className='font-Roboto text-md font-semibold my-5'>
          What is your Blood pressure
        </h3>
        <input type="number" name="BP" className='h-8 border border-green-500 px-3 py-2 rounded  focus:outline-none focus:border-green-700'
          onChange={(e) => { setUserLifestyle((prev) => ({ ...prev, BP: parseInt(e.target.value) })) }} />

        <h3 className='font-Roboto text-md font-semibold my-5'>
          What is your cholesterol level
        </h3>
        <input type="number" name="cholesterol level" className='h-8 border border-green-500 px-3 py-2 rounded  focus:outline-none focus:border-green-700'
          onChange={(e) => {
            if (parseInt(e.target.value) >= 240) {
              setUserLifestyle((prev) => ({ ...prev, BP: 1 }))
            }
            else {
              setUserLifestyle((prev) => ({ ...prev, BP: 0 }))
            }
          }} />

        <h3 className='font-Roboto text-md font-semibold my-5'>
          What is your average glucose level
        </h3>
        <input type="number" name="avg_glucose_lvl" className='h-8 border border-green-500 px-3 py-2 rounded  focus:outline-none focus:border-green-700'
          onChange={(e) => { setUserLifestyle((prev) => ({ ...prev, avg_glucose_level: parseInt(e.target.value) })) }} />

        <h3 className='font-Roboto text-md font-semibold my-5'>
          How many days you had poor mental health in last 30 days?
        </h3>
        <input type="number" name="mental health" className='h-8 border border-green-500 px-3 py-2 rounded  focus:outline-none focus:border-green-700'
          onChange={(e) => { setUserLifestyle((prev) => ({ ...prev, MentHlth: parseInt(e.target.value) })) }} />

        <h3 className='font-Roboto text-md font-semibold my-5'>
          How many days you had physical illness or injury in last 30 days?
        </h3>
        <input type="number" name="physical health" className='h-8 border border-green-500 px-3 py-2 rounded  focus:outline-none focus:border-green-700'
          onChange={(e) => { setUserLifestyle((prev) => ({ ...prev, PhysHlth: parseInt(e.target.value) })) }} />


        <div className='mt-5'>
          <h3 className='font-Roboto text-md font-semibold my-5'>
            Rate your general health on the scale of 1-5
          </h3>
          <Select
            options={genHealth}
            value={genHealth.value}
            placeholder='Select your general health status'
            onChange={(ele) => { setUserLifestyle((prev) => ({ ...prev, GenHlth: ele.value })) }}
            isSearchable={true}
          />
        </div>

        <Link to='/'>
          <button className='rounded-md bg-green-900 px-5 py-2 text-white mt-5' >Submit</button>
        </Link>
      </form>

    </div>
  );
};

export default Medical;
