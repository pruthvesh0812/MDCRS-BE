import React from 'react'
import { Link } from 'react-router-dom'

export default function Quiz() {
  return (
    <div>
      <Link to='/basic'>
        <button>Basic Questionnaire</button>
      </Link>
      <Link to='/diet'>
        <button>Diet Questionnaire</button>
      </Link>
      <Link to='/exercise'>
        <button>Exercise Questionnaire</button>
      </Link>
      <Link to='/sleep'>
        <button>Sleep Questionnaire</button>
      </Link>
    </div>
  )
}
