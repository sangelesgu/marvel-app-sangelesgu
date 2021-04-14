import React, { useContext, useEffect } from 'react'
import { orderBy } from '../../services/settings'
import { charactersContext } from '../../contexts/CharactersContext'
import useFilter from '../../hooks/useFilterReducer'

export const CustomSelect = ({ initialOrder = '' }) => {
  const context = useContext(charactersContext)
  const { setSort } = context
  const { sortBy, changeOrder } = useFilter(initialOrder)

  const handleSelect = e => {
    changeOrder({ sortBy: e.target.value })
  }

  useEffect(() => {
    setSort(sortBy)
  }, [sortBy])
  return (
    <>
      <select className="custom-select" value={ sortBy } onChange={handleSelect}>
         {orderBy.map(sort => (
            <option key={sort.label} value={sort.value}>
              {sort.label}
            </option>))}
      </select>
    </>
  )
}
