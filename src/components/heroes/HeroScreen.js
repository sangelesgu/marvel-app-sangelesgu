import React from "react";
import { useSingleCharacter } from "../../hooks/useSingleCharacter";
import { Spinner } from "../spinner/Spinner";
import PropTypes from "prop-types";

export const HeroScreen = ({ history }) => {
  const { loading, character } = useSingleCharacter();
  const text =
    "No found description for this character.  If you want to know more, click in details";
  const handleReturn = () => {
    history.goBack();
  };
  return (
    <div className="container mt-5">
      {loading ? (
        <Spinner />
      ) : (
        <div className="row mt-5">
          <>
            <div className="col-md-5 mt-5">
              <img
                alt={character.name}
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                className="img-thumbnail animate__animated animate__fadeInLeft img-responsive"
              />
            </div>
            <div className="col-md-5 mt-5">
              <div className="card text-white bg-dark">
                <div className="card-header">{character.name}</div>
                <div className="card-body text-withe">
                  {character.description ? (
                    <p className="card-text">{character.description}</p>
                  ) : (
                    <p className="card-text">{text}</p>
                  )}
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-3 mr-3">
                      <button
                        className="btn btn-outline-danger"
                        onClick={handleReturn}
                      >
                        <b>Back</b>
                      </button>
                    </div>
                    <div className="col-3 mr-3">
                      <a
                        href={character.urls[0].url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-outline-secondary">
                          <b>Details</b>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </div>
  );
};

HeroScreen.propTypes = {
  history: PropTypes.object,
};
