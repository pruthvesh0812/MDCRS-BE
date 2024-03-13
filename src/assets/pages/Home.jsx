import React from 'react'
import { Link } from 'react-router-dom' 
import Set1 from '../NLPpages/set1'
import Page1 from './Page1'

export default function Home() {
  return (
    <div>
       {/* <Link to="/quiz">
        <button>Lifestyle Questionnaire</button>
      </Link> */}
      <Page1/>
      {/* <Set1/> */}

    </div>
  )
}
