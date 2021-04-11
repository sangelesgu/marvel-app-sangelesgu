
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { DahboardRoutes } from './DahboardRoutes'

export const AppRouter = () => {
  return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" component={DahboardRoutes} />
                    </Switch>
                </div>
            </Router>
  )
}
