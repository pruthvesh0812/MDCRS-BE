import React, {useState, useContext} from 'react'
import Select from 'react-select';
import { dietContext } from '../../App';
import { Link } from 'react-router-dom';

export default function Diet2() {
    const [options, setOptions] = useState('');

    const [carb, setCarb] = useState('')
    const [diet, setDiet] = useContext(dietContext)
    const [protein, setProtein] = useState('')
    const [fat, setFat] = useState('')


    const handleCarb = (data) => {
        setCarb(data);
    }

    const handleProtein = (data) => {
        setProtein(data);
    }

    const handleFat = (data) => {
        setFat(data);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
      }

    const carbs =[
        {label:'White Rice', carb:'White Rice',value:'White Rice'},
        {label:'Brown Rice', carb:'Brown Rice',value:'Brown Rice'},
        {label:'Wheat', carb:'Wheat',value:'Wheat'},
        {label:'Millet', carb:'Millet',value:'Millet'},
        {label:'Root Vegetables', carb:'Root Vegetables',value:'Root Vegetables'},
        {label:'Fruits', carb:'Fruits',value:'Fruits'},
        {label:'Legumes/ Pulses', carb:'Legumes/ Pulses',value:'Legumes/ Pulses'},
      ]

      const protein1 =[
        {label:'Legumes/ Pulses', protein:'Legumes/ Pulses',value:'Legumes/ Pulses'},
        {label:'Soy and Soy Products', protein:'Soy and Soy Products',value:'Soy and Soy Products'},
        {label:'Whole Grains', protein:'Whole Grains',value:'Whole Grains'},
        {label:'Milk and Milk Products', protein:'Milk and Milk Products',value:'Milk and Milk Products'},
        {label:'Nuts and Seeds', protein:'Nuts and Seeds',value:'Nuts and Seeds'},
      ]

      const protein2 =[
        {label:'Legumes/ Pulses', protein:'Legumes/ Pulses',value:'Legumes/ Pulses'},
        {label:'Soy and Soy Products', protein:'Soy and Soy Products',value:'Soy and Soy Products'},
        {label:'Whole Grains', protein:'Whole Grains',value:'Whole Grains'},
        {label:'Nuts and Seeds', protein:'Nuts and Seeds',value:'Nuts and Seeds'},
      ]

      const protein3 =[
        {label:'Eggs', protein:'Eggs',value:'Eggs'},
        {label:'Fish', protein:'Fish',value:'Fish'},
        {label:'Chicken', protein:'Chicken',value:'Chicken'},
        {label:'Meat', protein:'Meat',value:'Meat'},
        {label:'Legumes/ Pulses', protein:'Legumes/ Pulses',value:'Legumes/ Pulses'},
        {label:'Soy and Soy Products', protein:'Soy and Soy Products',value:'Soy and Soy Products'},
        {label:'Whole Grains', protein:'Whole Grains',value:'Whole Grains'},
        {label:'Milk and Milk Products', protein:'Milk and Milk Products',value:'Milk and Milk Products'},
        {label:'Nuts and Seeds', protein:'Nuts and Seeds',value:'Nuts and Seeds'},
      ]

      const fat1 =[
        {label:'Cooking Oils', fat:'Cooking Oils',value:'Cooking Oils'},
        {label:'Ghee', fat:'Ghee',value:'Ghee'},
        {label:'Nuts and Seeds', fat:'Nuts and Seeds',value:'Nuts and Seeds'},
        {label:'Coconut', fat:'Coconut',value:'Coconut'},
        {label:'Milk and milk products', fat:'Milk and milk products',value:'Milk and milk products'},
        {label:'Avocado', fat:'Avocado',value:'Avocado'},
      ]

      const fat2 =[
        {label:'Cooking Oils', fat:'Cooking Oils',value:'Cooking Oils'},
        {label:'Nuts and Seeds', fat:'Nuts and Seeds',value:'Nuts and Seeds'},
        {label:'Coconut', fat:'Coconut',value:'Coconut'},
        {label:'Avocado', fat:'Avocado',value:'Avocado'},
      ]

      const fat3 =[
        {label:'Fish', fat:'Fish',value:'Fish'},
        {label:'Eggs', fat:'Eggs',value:'Eggs'},
        {label:'Meat', fat:'Meat',value:'Meat'},
        {label:'Cooking Oils', fat:'Cooking Oils',value:'Cooking Oils'},
        {label:'Ghee', fat:'Ghee',value:'Ghee'},
        {label:'Nuts and Seeds', fat:'Nuts and Seeds',value:'Nuts and Seeds'},
        {label:'Coconut', fat:'Coconut',value:'Coconut'},
        {label:'Milk and milk products', fat:'Milk and milk products',value:'Milk and milk products'},
        {label:'Avocado', fat:'Avocado',value:'Avocado'},
      ]

  
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div className='mt-10'>
            <h3>Do you meet the daily nutritional guidelines of 1/2 plate vegetables, 1/4 protein and 1/4 carbs in atleast 2 meals?</h3>
            <form>
                <input type="radio" name="options" value="Yes" className='ml-5 ' onChange={() => setOptions('Yes')}/> Yes
                <input type="radio" name="options" value="No" className='ml-5 '  onChange={() => setOptions('No')}/> No
            </form>
        </div>
        <div>
        <h3>What is your main source of carbohydrates?</h3>
        <div className='bg-slate-900 text-black'>
          <Select
            options={carbs}
            value={carb}
            placeholder='Select carb sources'
            onChange={handleCarb}
            isMulti
            isSearchable={true}
          />
        </div>    
        </div>
        <div>
        <h3>What is your main source of protein?</h3>
            {diet === "Vegetarian" && (
                <div className='bg-slate-900 text-black'>
                <Select
                  options={protein1}
                  value={protein}
                  placeholder='Select carb sources'
                  onChange={handleProtein}
                  isMulti
                  isSearchable={true}
                />
              </div>   
            )

            }
            {diet === "Vegan" && (
                <div className='bg-slate-900 text-black'>
                <Select
                  options={protein2}
                  value={protein}
                  placeholder='Select carb sources'
                  onChange={handleProtein}
                  isMulti
                  isSearchable={true}
                />
              </div>   
            )

            }
            {diet === "Non Vegetarian" && (
                <div className='bg-slate-900 text-black'>
                <Select
                  options={protein3}
                  value={protein}
                  placeholder='Select carb sources'
                  onChange={handleProtein}
                  isMulti
                  isSearchable={true}
                />
              </div>   
            )

            }
            <div>
        </div>
        <h3>What is your main source of fat?</h3>
            {diet === "Vegetarian" && (
                <div className='bg-slate-900 text-black'>
                <Select
                  options={fat1}
                  value={fat}
                  placeholder='Select carb sources'
                  onChange={handleFat}
                  isMulti
                  isSearchable={true}
                />
              </div>   
            )

            }
            {diet === "Vegan" && (
                <div className='bg-slate-900 text-black'>
                <Select
                  options={fat2}
                  value={fat}
                  placeholder='Select carb sources'
                  onChange={handleFat}
                  isMulti
                  isSearchable={true}
                />
              </div>   
            )

            }
            {diet === "Non Vegetarian" && (
                <div className='bg-slate-900 text-black'>
                <Select
                  options={fat3}
                  value={fat}
                  placeholder='Select carb sources'
                  onChange={handleFat}
                  isMulti
                  isSearchable={true}
                />
              </div>   
            )

            }
        </div>
        <Link to='/diet3'>
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  )
}
