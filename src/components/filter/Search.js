
import React, { } from 'react'
import { useHistory } from 'react-router-dom'
import './styles/Search.css'
import { CustomSelect } from './CustomSelect'
import useFilter from '../../hooks/useFilterReducer'

export const Search = ({ inititalSearch = '' }) => {
  const history = useHistory()
  const { search, changeSearch } = useFilter({ inititalSearch })

  const handleInputChange = (e) => {
    changeSearch({ search: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)
    history.push(`search/${search}`)
  }

  return (
     <div className="container mt-2">
        <div className="row">
          <div className="col-6">
             <div className="search">
                <form onSubmit={handleSubmit}>
                  <span className="fa fa-search"/>
                    <input
                      type="text"
                      placeholder="Find hero by name"
                      className="form-control"
                      autoComplete="off"
                      name="search"
                      value={search}
                      onChange={handleInputChange}
                    />
                </form>
            </div>
          </div>
          <div className="col-6">
            <CustomSelect/>
          </div>
       </div>
    </div>
  )
}
