import React,{useState} from 'react'
import Select from 'react-select'

export default function Diet3() {
    const [water, setWater] = useState('')
    const [beverage, setBeverage] = useState('')
    const [eating, setEating] = useState('')


    const handleEating = (data) => {
        setEating(data);
    }

    const handleBeverage = (data) => {
        setBeverage(data);
    }

    const handleWater = (data) => {
        setWater(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      }

    const water_intake =[
        {label:'Less than 3 glasses', protein:'Less than 3 glasses',value:'Less than 3 glasses'},
        {label:'3-5 glasses per day', protein:'3-5 glasses per day',value:'3-5 glasses per day'},
        {label:'5-8 glasses per day', protein:'5-8 glasses per day',value:'5-8 glasses per day'},
        {label:'More than 8 glasses', protein:'More than 8 glasses',value:'More than 8 glasses'}
      ]

      const beverage_options =[
        {label:'Tea', protein:'Tea',value:'Tea'},
        {label:'Coffee', protein:'Coffee',value:'Coffee'},
        {label:'Buttermilk', protein:'Buttermilk',value:'Buttermilk'},
        {label:'Coconut Water', protein:'Coconut Water',value:'Coconut Water'},
        {label:'Fruit juices', protein:'Fruit juices',value:'Fruit juices'},
        {label:'Soft Drinks', protein:'Soft Drinks',value:'Soft Drinks'}
      ]

      const eating_options =[
        {label:'less than thrice a week ', protein:'less than thrice a week ',value:'less than thrice a week '},
        {label:'More than 3 weeks', protein:'More than 3 weeks',value:'More than 3 weeks'},
        {label:'5-8 glasses per day', protein:'5-8 glasses per day',value:'5-8 glasses per day'},
        {label:'More than 8 glasses', protein:'More than 8 glasses',value:'More than 8 glasses'}
      ]


  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <h3>What is your daily water intake?</h3>
        <div className='bg-slate-900 text-black'>
          <Select
            options={water_intake}
            value={water}
            placeholder='Select carb sources'
            onChange={handleWater}
            isMulti
            isSearchable={true}
          />
        </div>    
        </div>
        <div>
        <h3>What other beverages do you regularly consume?</h3>
        <div className='bg-slate-900 text-black'>
          <Select
            options={beverage_options}
            value={beverage}
            placeholder='Select carb sources'
            onChange={handleBeverage}
            isMulti
            isSearchable={true}
          />
        </div>    
        </div>
        <div>
        <h3>How many times do you eat out in a week?</h3>
        <div className='bg-slate-900 text-black'>
          <Select
            options={eating_options}
            value={eating}
            placeholder='Select carb sources'
            onChange={handleEating}
            isMulti
            isSearchable={true}
          />
        </div>
        </div>    
        
        </form>
    </div>
  )
}
