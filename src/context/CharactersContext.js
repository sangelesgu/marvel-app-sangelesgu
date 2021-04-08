import React, {useState} from 'react'

const Context = React.createContext({})

export const  CharactersContext =  ({children}) => {
  const [characters, setCharacters] = useState([])

  return <Context.Provider value={{characters, setCharacters}}>
    {children}
    
  </Context.Provider>
}

export default Context