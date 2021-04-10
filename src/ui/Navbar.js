
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import marvel from './marvel.svg'
export const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link className="navbar-brand" to="/">
                 <img className="d-inline-block align-text-top" src={marvel} alt="" width="120" height="40"/>
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/characters"
                    >
                        Characters
                    </NavLink>

                </div>
            </div>
        </nav>
  )
}
