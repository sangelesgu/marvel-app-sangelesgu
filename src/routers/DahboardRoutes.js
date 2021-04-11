
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HeroList } from '../components/heroes/HeroList'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { SearchResults } from '../components/search/SearchResults'
import { Navbar } from '../layout/Navbar'

export const DahboardRoutes = () => {
  return (
        <>
            <Navbar />

            <div className="container-fluid mt-2">
                <Switch>
                    <Route exact path="/characters" component={HeroList} />
                    <Route exact path="/characters/:id" component={HeroScreen} />
                    <Route exact path="/search/:name" component={SearchResults} />

                    <Redirect to="/characters"/>
                </Switch>
            </div>
        </>
  )
}
