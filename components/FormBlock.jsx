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
        meeting: false,
        dateNight: false, 
        drinks: false,
        brunch: false,
        italian: false,
        newAmerican: false,
        japanese: false,
        mexican: false,
        chinese: false,
        french: false,
        mediterranean: false,
        any: false,
        inexpensive: false,
        midPriced: false,
        expensive: false
    }

    const [formEntry, setFormEntry] = useState({ initialState });

    //event handler for form entry
    const handleChange = e => {
        setFormEntry({
            ...formEntry,
            // use conditional statement -- if checkbox set target name to 
            [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value
        });

        console.log(formEntry);
    
    }

    //event handler for submit
    const handleSubmit = (event) => {

        //prevent browser from reloading page 
        event.preventDefault();

        //reset form to initial state
        
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
                        id="publicTransportation" 
                        name="transportation" 
                        value="publicTransportation"
                        checked= {formEntry.transportation === "publicTransportation"}
                        onChange={handleChange}
                    />
                    <label htmlFor="publicTransportation">Public Transportation</label>
                    <input 
                        type="radio" 
                        id="publicTransportationAndCar" 
                        name="transportation" 
                        value="publicTransportationAndCar" 
                        checked= {formEntry.transportation === "publicTransportationAndCar"}
                        onChange={handleChange}
                    />
                    <label htmlFor="publicTransportationAndCar">Public Transportation & Car</label>
                </fieldset>

                {/* event type */}
                <fieldset className="form-event-type">
                    <legend><span className={spaceMono.className}>3.</span>Would you like options that are good for any of the below? (select any amount)</legend>
                    <input 
                        type="checkbox" 
                        id="meeting" 
                        name="eventType" 
                        value="meeting"
                        checked={formEntry.meeting}
                        onChange={handleChange}
                    />
                    <label htmlFor="meeting">Meeting</label>
                    <input 
                        type="checkbox" 
                        id="dateNight" 
                        name="eventType" 
                        value="dateNight" 
                        checked={formEntry.dateNight}
                        onChange={handleChange}
                    />
                    <label htmlFor="dateNight">Date Night</label>
                    <input 
                        type="checkbox" 
                        id="drinks" 
                        name="eventType" 
                        value="drinks" 
                        checked={formEntry.drinks}
                        onChange={handleChange}
                    />
                    <label htmlFor="drinks">Drinks</label>
                    <input 
                        type="checkbox" 
                        id="brunch" 
                        name="eventType" 
                        value="brunch" 
                        checked={formEntry.brunch}
                        onChange={handleChange}
                    />
                    <label htmlFor="brunch">Brunch</label>
                </fieldset>

                {/* food types */}
                <fieldset className="form-food-type">
                    <legend><span className={spaceMono.className}>4.</span>What type of food would you like to eat? (select any amount)</legend>
                    <input 
                        type="checkbox" 
                        id="italian" 
                        name="foodType" 
                        value="italian" 
                        checked={formEntry.italian}
                        onChange={handleChange}
                    />
                    <label htmlFor="italian">Italian</label>
                    <input 
                        type="checkbox" 
                        id="newAmerican" 
                        name="foodType" 
                        value="newAmerican" 
                        checked={formEntry.newAmerican}
                        onChange={handleChange}
                    />
                    <label htmlFor="newAmerican">New American</label>
                    <input 
                        type="checkbox" 
                        id="japanese" 
                        name="foodType" 
                        value="japanese" 
                        checked={formEntry.japanese}
                        onChange={handleChange}
                    />
                    <label htmlFor="japanese">Japanese</label>
                    <input 
                        type="checkbox" 
                        id="mexican" 
                        name="foodType" 
                        value="mexican" 
                        checked={formEntry.mexican}
                        onChange={handleChange}
                    />
                    <label htmlFor="mexican">Mexican</label>
                    <input 
                        type="checkbox" 
                        id="chinese" 
                        name="foodType" 
                        value="chinese" 
                        checked={formEntry.chinese}
                        onChange={handleChange}
                    />
                    <label htmlFor="chinese">Chinese</label>
                    <input 
                        type="checkbox" 
                        id="french" 
                        name="foodType" 
                        value="french" 
                        checked={formEntry.french}
                        onChange={handleChange}
                    />
                    <label htmlFor="french">French</label>
                    <input 
                        type="checkbox" 
                        id="mediterranean" 
                        name="foodType" 
                        value="mediterranean"
                        checked={formEntry.mediterranean}
                        onChange={handleChange}
                    />
                    <label htmlFor="mediterranean">Mediterranean</label>
                    <input 
                        type="checkbox" 
                        id="any" 
                        name="foodType" 
                        value="any" 
                        checked={formEntry.any}
                        onChange={handleChange}
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
                        checked={formEntry.inexpensive}
                        onChange={handleChange}
                    />
                    <label htmlFor="inexpensive">$$</label>
                    <input 
                        type="checkbox" 
                        id="midPriced" 
                        name="price" 
                        value="midPriced" 
                        checked={formEntry.midPriced}
                        onChange={handleChange}
                    />
                    <label htmlFor="midPriced">$$$</label>
                    <input 
                        type="checkbox" 
                        id="expensive" 
                        name="price" 
                        value="expensive" 
                        checked={formEntry.expensive}
                        onChange={handleChange}
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