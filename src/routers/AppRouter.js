
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HeroList } from '../components/heroes/HeroList';
import { DahboardRoutes } from './DahboardRoutes';



export const AppRouter = () => {
    return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/charcters" component={HeroList} />
                        <Route  path="/" component={DahboardRoutes} />
                    </Switch>
                </div>
            </Router>
      );
}
