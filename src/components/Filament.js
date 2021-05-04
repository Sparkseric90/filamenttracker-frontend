import React, { useState, useEffect } from "react";
import FilamentDataService from "../services/FilamentService";

const Filament = props => {
  const initialFilamentState = {
    id: "",
    brand: "",
    color: "",
    numberofrolls: "",
    weight: "",
    notes: "",
    status: false
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

  const updatePublished = status => {
    var data = {
      brand: currentFilament.brand,
      type: currentFilament.type,
      color: currentFilament.color,
      numberofrolls: currentFilament.numberofrolls,
      weight: currentFilament.weight,
      notes: currentFilament.notes,
      Status: status
    };

    FilamentDataService.update(currentFilament.id, data)
      .then(response => {
        setCurrentFilament({ ...currentFilament, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateFilament = () => {
    FilamentDataService.update(currentFilament.id, currentFilament)
      .then(response => {
        console.log(response.data);
        setMessage("The filament was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

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
          <h4>Filament</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Brand</label>
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
              <label htmlFor="title">Type</label>
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
              <label htmlFor="description">Color</label>
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
              <label htmlFor="description">Number Of Rolls</label>
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
              <label htmlFor="description">Weight</label>
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
              <label htmlFor="description">Notes</label>
              <input
                type="text"
                className="form-control"
                id="notes"
                name="notes"
                value={currentFilament.notes}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Status</label>
              <input
                type="text"
                className="form-control"
                id="status"
                name="status"
                value={currentFilament.status}
                onChange={handleInputChange}
              />
            </div>


            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentFilament.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentFilament.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnOpened
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Opened
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteFilament}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateFilament}
          >
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
