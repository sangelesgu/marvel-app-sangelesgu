import React from 'react'
import './styles/Spinner.css'
import avengers from './avengers.svg'

export const Spinner = () => {
  return (
        <div className="spinner container justify-content-center mt-4">
            <img className="d-inline-block align-text-top" src={avengers} alt="" width="150" height="120"/>
        </div>
  )
}
