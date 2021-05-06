import React, { useState, useEffect } from "react";
import FilamentDataService from "../services/FilamentService";

const Filament = props => {
  const initialFilamentState = {
    id: "",
    brand: "",
    type: "",
    color: "",
    numberofrolls: "",
    weight: "",
    notes: ""
  };
  const [currentFilament, setCurrentFilament] = useState(initialFilamentState);
  const [message, setMessage] = useState("");

  const getFilament = id => {
    FilamentDataService.get(id)
      .then(response => {
        setCurrentFilament(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getFilament(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentFilament({ ...currentFilament, [name]: value });
  };

  const updateFilament = status => {
    var data = {
      brand: currentFilament.brand,
      type: currentFilament.type,
      color: currentFilament.color,
      numberofrolls: currentFilament.numberofrolls,
      weight: currentFilament.weight,
      notes: currentFilament.notes,
    };

    FilamentDataService.update(currentFilament.id, data)
      .then(response => {
        setCurrentFilament({ ...currentFilament, published: status });
        console.log(response.data);
        setMessage("The filament was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  // const filamentUpdate = () => {
  //   FilamentDataService.update(currentFilament.id)
  //     .then(response => {
  //       console.log(response.data);
  //       setMessage("The filament was updated successfully!");
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  const deleteFilament = () => {
    FilamentDataService.remove(currentFilament.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    
    <div>
      {currentFilament ? (
        <div className="edit-form">
          <h4>Edit Filament</h4>
          <form>
            <div className="form-group">
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                className="form-control"
                id="brand"
                name="brand"
                value={currentFilament.brand}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                className="form-control"
                id="type"
                name="type"
                value={currentFilament.type}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                className="form-control"
                id="color"
                name="color"
                value={currentFilament.color}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="numberofrolls">Number Of Rolls</label>
              <input
                type="text"
                className="form-control"
                id="numberofrolls"
                name="numberofrolls"
                value={currentFilament.numberofrolls}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                className="form-control"
                id="weight"
                name="weight"
                value={currentFilament.weight}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <input
                type="text"
                className="form-control"
                id="notes"
                name="notes"
                value={currentFilament.notes}
                onChange={handleInputChange}
              />
            </div>

          </form>



          <button className="m-4 position-absolute top-30 start-30 btn btn-danger mr-2" onClick={deleteFilament}>
            Delete
          </button>


          <button className="m-4 position-absolute top-30 start-50 btn btn-success mr-2" onClick={updateFilament}>
            Update
          </button>

          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Click on a filament to see more info....</p>
        </div>
      )}
    </div>
    
  );
};

export default Filament;
