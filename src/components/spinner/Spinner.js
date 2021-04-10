import React from 'react'
import './styles/Spinner.css'

export const Spinner = () => {
  return (
        <div className="d-flex justify-content-center">

            <div className="spinner-box">
                <div className="leo-border-1">
                    <div className="leo-core-1"></div>
                </div>
                <div className="leo-border-2">
                    <div className="leo-core-2"></div>
                </div>
            </div>

        </div>
  )
}
