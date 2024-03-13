import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { dietContext } from '../../App';

export default function Diet1() {
  const [meal, setMeals] = useState('');
  const [allergy, setAllergy] = useState('');
  const [diet, setDiet] = useContext(dietContext);
  const [junk, setJunk] = useContext(dietContext);
  const [isFormValid, setIsFormValid] = useState(false); // State for form validation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleMeals = (data) => {
    setMeals(data);
  };

  const handleAllergy = (data) => {
    setAllergy(data);
    setIsFormValid(data !== '' && junk !== '' && diet !== ''); // Update form validation state
  };

  const handleJunk = (data) => {
    setJunk(data);
    setIsFormValid(data !== '' && allergy !== '' && diet !== ''); // Update form validation state
  };

  const no_of_meals = [
    { label: '1 meal per day', meal: '1 meal per day', value: '1 meal per day' },
    { label: '2 meal per day', meal: '2 meal per day', value: '2 meal per day' },
    { label: '3 meal per day', meal: '3 meal per day', value: '3 meal per day' },
    { label: '4 meal per day', meal: '4 meal per day', value: '4 meal per day' },
    { label: 'more meal per day', meal: 'more meal per day', value: 'more meal per day' },
  ];

  const allergies = [
    { label: 'None', allergy: 'None', value: 'None' },
    { label: 'Lactose intolerance', allergy: 'Lactose', value: 'Lactose' },
    { label: 'Gluten intolerance', allergy: 'Gluten', value: 'Gluten' },
    { label: 'Low carb diet', allergy: 'Low carb', value: 'Low carb' },
    { label: 'Peanuts allergy', allergy: 'Peanuts', value: 'Peanuts' },
    { label: 'Soy allergy', allergy: 'Soy', value: 'Soy' },
    { label: 'Milk allergy', allergy: 'Milk', value: 'Milk' },
    { label: 'Eggs allergy', allergy: 'Eggs', value: 'Eggs' },
    { label: 'Shellfish allergy', allergy: 'Shellfish', value: 'Shellfish' },
    { label: 'Fish allergy', allergy: 'Fish', value: 'Fish' },
    { label: 'Sesame allergy', allergy: 'Sesame', value: 'Sesame' },
    { label: 'Mustard allergy', allergy: 'Mustard', value: 'Mustard' },
  ];

  const junk_options = [
    { label: 'Never', junk: 'Never', value: 'Never' },
    { label: 'Every Meal', junk: 'Every Meal', value: 'Every Meal' },
    { label: 'More than thrice a week', junk: 'More than thrice a week', value: 'More than thrice a week' },
    { label: 'Less than twice a week', junk: 'Less than twice a week', value: 'Less than twice a week' },
    { label: 'Once in a while', junk: 'Once in a while', value: 'Once in a while' },
  ];

  return (
    <div className='mx-[30%] my-[10%]'>
      <form onSubmit={handleSubmit}>
        <div className='mt-10 '>
          <h3 className='font-Roboto text-sm mb-1'>What is your specific diet preference?</h3>
          <form>
            <input type="radio" name="diet" value="Vegetarian" onChange={() => setDiet('Vegetarian')} /> Vegetarian
            <input type="radio" name="diet" value="Non Vegetarian" className='ml-5 ' onChange={() => setDiet('Non Vegetarian')} /> Non Vegetarian
          </form>
        </div>
        <div className='mt-5'>
          <h3 className='font-Roboto text-sm mb-1'>Do you have any known food allergies or dietary restrictions?</h3>
          <div className=''>
            <Select
              options={allergies}
              value={allergy}
              placeholder='Select food intolerances if any'
              onChange={handleAllergy}
              isMulti={allergy && allergy.value !== 'None'}
              isSearchable={true}
            />
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='font-Roboto text-sm mb-1'>How often do you find yourself consuming items high in sugar, salt, or processed foods (candies, chips, cakes, burger, pizza)?</h3>
          <div className=''>
            <Select
              options={junk_options}
              value={junk}
              placeholder='Select junk food frequency'
              onChange={handleJunk}
              isSearchable={true}
            />
          </div>
        </div>
        <Link to=''>
          <button type='submit' disabled={!isFormValid} className='rounded-md bg-green-900 px-5 py-2 text-white mt-5'>Submit</button>
        </Link>
      </form>
    </div>
  )
}
