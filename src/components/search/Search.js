
import React, { useContext } from 'react'
import queryString from 'query-string'
import { useHistory, useLocation } from 'react-router-dom'
import { useSearch } from '../../hooks/useSearch'
import './styles/Search.css'
import { charactersContext } from '../../contexts/CharactersContext'

export const Search = () => {
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const history = useHistory()

  // const [name, setName] = useState('')

  const [formValues, handleInputChange] = useSearch({ searchText: q })

  const context = useContext(charactersContext)
  const { setFiltered, filter } = context
  const { searchText } = formValues
  const handleSearch = async (e) => {
    history.replace('/search')
    e.preventDefault()
    console.log(location.pathname)
    if (searchText !== '') history.push(`search/${searchText}`)
  }
  const handleSelect = e => {
    const order = e.target.value
    setFiltered(() => setFiltered(order))
    console.log(filter)
  }
  return (
            <div className="container mt-2">
                    <div className="row">
                        <div className="col-6">
                            <div className="search">
                                <form onSubmit={handleSearch}>
                                    <span className="fa fa-search"/>
                                    <input
                                        type="text"
                                        placeholder="Find hero by name"
                                        className="form-control"
                                        autoComplete="off"
                                        name="searchText"
                                        value={searchText}
                                        onChange={handleInputChange}
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="col-6">
                            <select className="select custom-select" onChange={handleSelect}>
                                <option defaultValue>Order by</option>
                                <option value={'name'}> Name A - Z</option>
                                <option value={'-name'}>Name Z - A</option>
                            </select>
                        </div>
                    </div>

            </div>
  )
}
