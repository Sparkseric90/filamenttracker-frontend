import React, { useState } from "react";
import FilamentService from "../services/FilamentService";


const AddFilament = () => {
    const initialFilamentState = {
        brand: "",
        type: "",
        color: "",
        numberofrolls: "",
        weight: "",
        notes: ""
    };
    const [filament, setFilament] = useState(initialFilamentState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFilament({...filament, [name]: value });
    };


    //Setting up the function to get the input boxes listening for data to work with the Submit button.
    const saveFilament = (e) => {
        var data = {
            brand: filament.brand,
            type: filament.type,
            color: filament.color,
            numberofrolls: filament.numberofrolls,
            weight: filament.weight,
            notes: filament.notes
        };
        e.preventDefault()

        FilamentService.create(data)
            .then(response => {
                setFilament({
                    brand: response.data.id,
                    type: response.data.type,
                    color: response.data.description,
                    numberofrolls: response.data.numberofrolls,
                    weight: response.data.weight,
                    notes: response.data.notes,
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
                Back
              </button>
            </div>
          ) : (
            <form onSubmit={saveFilament}>
      {/* Input form group  */}
      <p class="text-center fw-bold">Add Filaments</p>
              <div className="form-group">
                <label htmlFor="title">Brand</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={filament.brand}
                  onChange={handleInputChange}
                  name="brand"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="title">Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  required
                  value={filament.type}
                  onChange={handleInputChange}
                  name="type"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="title">Color</label>
                <input
                  type="text"
                  className="form-control"
                  id="color"
                  required
                  value={filament.color}
                  onChange={handleInputChange}
                  name="color"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="title">Number Of Rolls</label>
                <input
                  type="text"
                  className="form-control"
                  id="numberofrolls"
                  required
                  value={filament.numberofrolls}
                  onChange={handleInputChange}
                  name="numberofrolls"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="title">Weight</label>
                <input
                  type="text"
                  className="form-control"
                  id="weight"
                  required
                  value={filament.weight}
                  onChange={handleInputChange}
                  name="weight"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="description">Notes</label>
                <input
                  type="text"
                  className="form-control"
                  id="notes"
                  required
                  value={filament.notes}
                  onChange={handleInputChange}
                  name="notes"
                />
              </div>
    
    
    
              <button type="submit" className="m-2 btn btn-success">
                Submit
              </button>
            </form>


          )}
        </div>
      );
    };
    
    export default AddFilament;