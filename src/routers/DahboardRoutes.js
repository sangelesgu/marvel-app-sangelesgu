
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HeroList } from '../components/heroes/HeroList'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { Navbar } from '../ui/Navbar'

export const DahboardRoutes = () => {
  return (
        <>
            <Navbar />

            <div className="container-fluid mt-2">
                <Switch>
                    <Route exact path="/characters" component={HeroList} />
                    <Route exact path="/characters/:id" component={HeroScreen} />

                    <Redirect to="/characters"/>
                </Switch>
            </div>
        </>
  )
}
