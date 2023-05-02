import { sora, spaceMono } from "../utils/fonts";
import { useState } from "react";

const FormBlock = () => {

    const initialState = {
        address1: '',
        address2: '',
        adddress3: '',
        car: false,
        publicTransportation: false,
        publicTransportationAndCar: false,
    }

    const [formEntry, setFormEntry] = useState({ initialState });

    //event handler for form entry
    const handleChange = e => {
        setFormEntry({
            ...state,
            [e.target.name] : e.target.value
        })
        // setFormEntry(e.target.value);
    }

    //event handler for submit
    const handleSubmit = (event) => {

        //prevent browser from reloading page 
        event.preventDefault();

        console.log(address1);
    }
    
    return (

        <div className="form-block">

            {/* add in form destination and get or post*/}
            <form onSubmit={handleSubmit} className={sora.className} action="/" method="post">

                {/* addreses */}
                <fieldset className="form-addresses">
                    <legend><span className={spaceMono.className}>1.</span>Where is everyone coming from?</legend>
                    <label htmlFor="address1">Neighborhood 1:</label>
                    <input 
                        type="text" 
                        id="address1" 
                        name="address1" 
                        value={formEntry.address1} 
                        onChange={handleChange} 
                        className={spaceMono.className} 
                        placeholder="enter the: 'neighborhood, city, state'" 
                    />
                    <label htmlFor="address2">Neighborhood 2:</label>
                    <input 
                        type="text" 
                        id="address2" 
                        name="address2" 
                        value={formEntry.address2} 
                        onChange={handleChange} 
                        className={spaceMono.className}
                        placeholder="enter the: 'neighborhood, city, state'"
                    />
                    <label htmlFor="address3">Neighborhood 3:</label>
                    <input 
                        type="text" 
                        id="address3" 
                        name="address3" 
                        value={formEntry.address3} 
                        onChange={handleChange}
                        className={spaceMono.className} 
                        placeholder="enter the: 'neighborhood, city, state'"
                />
                </fieldset>

                {/* mode of transportation */}
                <fieldset className="form-transportation">
                    <legend><span className={spaceMono.className}>2.</span>How is everyone getting there? (select one)</legend>
                    <input 
                        type="radio" 
                        id="car" 
                        name="transportation" 
                        value="car" 
                        checked= {formEntry.transportation === "car"}
                        onChange={handleChange}
                    />
                    <label htmlFor="car">Car</label>
                    <input 
                        type="radio" 
                        id="public-transportation" 
                        name="transportation" 
                        value="publicTransportation"
                        checked= {formEntry.transportation === "publicTransportation"}
                        onChange={handleChange}
                    />
                    <label htmlFor="public-transportation">Public Transportation</label>
                    <input 
                        type="radio" 
                        id="public-transportation-and-car" 
                        name="transportation" 
                        value="publicTransportationAndCar" 
                        checked= {formEntry.transportation === "publicTransportationAndCar"}
                        onChange={handleChange}
                    />
                    <label htmlFor="public-transportation-and-car">Public Transportation & Car</label>
                </fieldset>

                {/* event type */}
                <fieldset className="form-event-type">
                    <legend><span className={spaceMono.className}>3.</span>Would you like options that are good for any of the below? (select any amount)</legend>
                    <input 
                        type="checkbox" 
                        id="meeting" 
                        name="event-type" 
                        value="meeting" 
                    />
                    <label htmlFor="meeting">Meeting</label>
                    <input 
                        type="checkbox" 
                        id="date-night" 
                        name="event-type" 
                        value="date-night" 
                    />
                    <label htmlFor="date-night">Date Night</label>
                    <input 
                        type="checkbox" 
                        id="drinks" 
                        name="event-type" 
                        value="drinks" 
                    />
                    <label htmlFor="drinks">Drinks</label>
                    <input 
                        type="checkbox" 
                        id="brunch" 
                        name="event-type" 
                        value="brunch" 
                    />
                    <label htmlFor="brunch">Brunch</label>
                </fieldset>

                {/* food types */}
                <fieldset className="form-food-type">
                    <legend><span className={spaceMono.className}>4.</span>What type of food would you like to eat? (select any amount)</legend>
                    <input 
                        type="checkbox" 
                        id="italian" 
                        name="food-type" 
                        value="italian" 
                    />
                    <label htmlFor="italian">Italian</label>
                    <input 
                        type="checkbox" 
                        id="new-american" 
                        name="food-type" 
                        value="new-american" 
                    />
                    <label htmlFor="new-american">New American</label>
                    <input 
                        type="checkbox" 
                        id="japanese" 
                        name="food-type" 
                        value="japanese" 
                    />
                    <label htmlFor="japanese">Japanese</label>
                    <input 
                        type="checkbox" 
                        id="mexican" 
                        name="food-type" 
                        value="mexican" 
                    />
                    <label htmlFor="mexican">Mexican</label>
                    <input 
                        type="checkbox" 
                        id="chinese" 
                        name="food-type" 
                        value="chinese" 
                    />
                    <label htmlFor="chinese">Chinese</label>
                    <input 
                        type="checkbox" 
                        id="french" 
                        name="food-type" 
                        value="french" 
                    />
                    <label htmlFor="french">French</label>
                    <input 
                        type="checkbox" 
                        id="mediterranean" 
                        name="food-type" 
                        value="mediterranean"
                    />
                    <label htmlFor="mediterranean">Mediterranean</label>
                    <input 
                        type="checkbox" 
                        id="any" 
                        name="food-type" 
                        value="any" 
                    />
                    <label htmlFor="any">Any</label>
                </fieldset>

                {/* price point */}
                <fieldset className="form-price">
                    <legend><span className={spaceMono.className}>5.</span>What is your preferred price point? (select any amount)</legend>
                    <input 
                        type="checkbox" 
                        id="inexpensive" 
                        name="price" 
                        value="inexpensive" 
                    />
                    <label htmlFor="inexpensive">$$</label>
                    <input 
                        type="checkbox" 
                        id="moderate-price" 
                        name="price" 
                        value="moderate-price" 
                    />
                    <label htmlFor="moderate-price">$$$</label>
                    <input 
                        type="checkbox" 
                        id="expensive" 
                        name="price" 
                        value="expensive" 
                    />
                    <label htmlFor="expensive">$$$$</label>
                </fieldset>

                {/* button */}
                <button className={spaceMono.className} type="submit">Find me restaurants</button>

            </form>

        </div>
    );
}

export default FormBlock;