import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HeroCard.css';
 
export const HeroCard = ({id, name, thumbnail }) => {

   /*  const notFoundSrc = e => {
        e.preventDefault();
        e.target.src = notFoundImage;
    }; */
        
        return (
                <div className="container-fluid">
                    <Link to={`./characters/${id}`} className="my-card">
                        <img 
                            className="img img-responsive"
                            alt={name}
                            src={`${thumbnail.path}.${thumbnail.extension}`} 
                        // onError={notFoundSrc}
                            />
                        <div className="profile-name">{name}</div>
                        <div className="profile-overview">
                            <div className="profile-overview">
                                <div className="row">
                                
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
        );
};
