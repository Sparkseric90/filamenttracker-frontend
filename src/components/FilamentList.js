import React, { useState, useEffect } from "react";
import FilamentDataService from "../services/FilamentService";
import { Link } from "react-router-dom";



const FilamentList = () => {
  const [filament, setFilaments] = useState([]);
  const [currentFilament, setCurrentFilament] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);


  useEffect(() => {
    retrieveFilament();
  }, []);


  const retrieveFilament = () => {
    FilamentDataService.getAll()
      .then(response => {
        setFilaments(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveFilament();
    setCurrentFilament(null);
    setCurrentIndex(-1);
  };

  const setActiveFilament = (filament, index) => {
    setCurrentFilament(filament);
    setCurrentIndex(index);
  };

  const removeAllFilament = () => {
    FilamentDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
//displays Filaments that are located in the database, in a list group.
<div className="container2">
    <div className="list row">
      <div className="col-md-6 overflow-auto">
        <h4>Filaments</h4>
        <ul className="list-group">
          {filament &&
            filament.map((filament, index) => (
              <li className={"list-group-item " + (index === currentIndex ? "active" : "")} onClick={() => setActiveFilament(filament, index)} key={index}>{filament.brand}</li>
            ))}
        </ul>
      </div>


      
      <div className="col-md-6">
        {currentFilament ? (
          <div>
            <h4>Information</h4>
            <div>
              <label>
                <strong>Brand:</strong>
              </label>{" "}
              {currentFilament.brand}
            </div>
            <div>
              <label>
                <strong>Type:</strong>
              </label>{" "}
              {currentFilament.type}
            </div>
            <div>
              <label>
                <strong>Color:</strong>
              </label>{" "}
              {currentFilament.color}
            </div>
            <div>
              <label>
                <strong>Number Of Rolls:</strong>
              </label>{" "}
              {currentFilament.numberofrolls}
            </div>
            <div>
              <label>
                <strong>Weight:</strong>
              </label>{" "}
              {currentFilament.weight}
            </div>
            <div>
              <label>
                <strong>Notes:</strong>
              </label>{" "}
              {currentFilament.notes}
            </div>

            <Link to={"/filament/" + currentFilament.id} className="btn btn-secondary">Edit</Link>


          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Filament to see more info...</p>
          </div>
        )}
      </div>
    </div>
</div>
  );
};

export default FilamentList;
