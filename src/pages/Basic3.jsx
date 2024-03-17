import React, {useState} from 'react'

export default function Basic3() {
    const [options, setOptions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
      }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      

        <div className='mt-10'>
        <h3>Do you smoke?</h3>
        <form>
          <input type="radio" name="options" value="Yes" className='ml-5 ' onChange={() => setOptions('Yes')}/> Yes
          <input type="radio" name="options" value="No" className='ml-5 '  onChange={() => setOptions('No')}/> No
        </form>
      </div>
      {options === 'Yes' && (
        <div className='mt-10'>
        <h3>How long has it been since you started smoking?</h3>
        <h3>How much do you smoke?</h3>
      </div>
      )}

      <div className='mt-10'>
        <h3>Do you consume alcohol?</h3>
        <form>
          <input type="radio" name="options" value="Yes" className='ml-5 ' onChange={() => setOptions('Yes')}/> Yes
          <input type="radio" name="options" value="No" className='ml-5 ' onChange={() => setOptions('No')}/> No
        </form>
      </div>
      {options === 'Yes' && (
        <div className='mt-10'>
        <h3>How long has it been since you started drinking alcohol?</h3>
        <h3>How much quantity?</h3>
        <h3>How frequently?</h3>
      </div>
      )}
        <br />
        <button type='submit'>Submit</button>
    </form>
    </div>
  )
}
