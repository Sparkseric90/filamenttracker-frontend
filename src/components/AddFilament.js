import React, { useState } from "react";
import FilamentService from "../services/FilamentService";

const AddFilament = () => {
  const initialFilamentState = {
    brand: '',
    type: "",
    color: "",
    numberofrolls: "",
    weight: "",
    notes: "",
    status: ""
  };
  const [filament, setFilament] = useState(initialFilamentState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFilament({ ...filament, [name]: value });
  };

  const saveFilament = () => {
    var data = {
      brand: filament.brand,
      title: filament.title,
      color: filament.color,
      numberofrolls: filament.numberofrolls,
      weight: filament.weight,
      notes: filament.notes,
      status: filament.status
    };

    FilamentService.create(data)
      .then(response => {
        setFilament({
          brand: response.data.id,
          type: response.data.title,
          color: response.data.description,
          numberofrolls: response.data.numberofrolls,
          weight: response.data.weight,
          notes: response.data.notes,
          status: response.data.status
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newFilament = () => {
    setFilament(initialFilamentState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newFilament}>
            Add
          </button>
        </div>
      ) : (
        <div>

          <div className="form-group">
            <label htmlFor="title">Brand</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={filament.brand}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Type</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={filament.type}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Color</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={filament.color}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Number Of Rolls</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={filament.numberofrolls}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Weight</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={filament.weight}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Notes</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={filament.notes}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Status</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={filament.status}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <button onClick={saveFilament} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddFilament;
