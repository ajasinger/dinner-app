import { sora, spaceMono } from "../utils/fonts";
import { useState } from "react";

const FormBlock = () => {

    const initialState = {
        address1: '',
        address2: '',
        address3: '',
        eventType: {
            meeting: false,
            dateNight: false, 
            drinks: false,
            brunch: false
        },
        foodType: {
            italian: false,
            newAmerican: false,
            japanese: false,
            mexican: false,
            chinese: false,
            french: false,
            mediterranean: false,
            any: false
        },
        price: {
            inexpensive: false,
            midPriced: false,
            expensive: false
        }
    }

    const [formEntry, setFormEntry] = useState(initialState);

    //event handler for form entry
    const handleChange = e => {
        setFormEntry({
            ...formEntry,
            [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value
        });

        console.log(formEntry);
    }

    //event handler for submit
    const handleSubmit = event => {

        //prevent browser from reloading page 
        event.preventDefault();

        //make new instance of formEntry to refer back to?

        //create prompt for API
        //const neighborhoodSelections = use value of each "`${?address1}`, `${?address2}`, `${?address2}`"
        // for these if the value is true need the property's key 
        //const eventSelections = string of all true event types 
        //const foodSelections = string of all true food types 
        //const priceSelections = string of all true prices 
       

        //reset form to initial state
        setFormEntry({initialState});

    }
    
    return (

        <div className="form-block">

            {/* add in form destination and get or post*/}
            <form onSubmit={handleSubmit} className={sora.className} action="/" method="post">

                {/* addreses */}
                <fieldset className="form-address">
                    <legend><span className={spaceMono.className}>1.</span>Where is everyone coming from?</legend>
                    <label htmlFor="address1">Neighborhood 1:</label>
                    <input 
                        type="text" 
                        id="address1" 
                        name="address1" 
                        value={formEntry.address1} 
                        onChange={handleChange} 
                        className={spaceMono.className} 
                        placeholder="enter the neighborhood" 
                    />
                    <label htmlFor="address2">Neighborhood 2:</label>
                    <input 
                        type="text" 
                        id="address2" 
                        name="address2" 
                        value={formEntry.address2} 
                        onChange={handleChange} 
                        className={spaceMono.className}
                        placeholder="enter the neighborhood"
                    />
                    <label htmlFor="address3">Neighborhood 3:</label>
                    <input 
                        type="text" 
                        id="address3" 
                        name="address3" 
                        value={formEntry.address3} 
                        onChange={handleChange}
                        className={spaceMono.className} 
                        placeholder="enter the neighborhood"
                    />
                </fieldset>

                {/* event type */}
                <fieldset className="form-event-type">
                    <legend><span className={spaceMono.className}>3.</span>Would you like options that are good for any of the below? (select any amount)</legend>
                    <input 
                        type="checkbox" 
                        id="meeting" 
                        name="meeting" 
                        checked={formEntry.eventType.meeting}
                        onChange={handleChange}
                    />
                    <label htmlFor="meeting">Meeting</label>
                    <input 
                        type="checkbox" 
                        id="dateNight" 
                        name="dateNight" 
                        checked={formEntry.eventType.dateNight}
                        onChange={handleChange}
                    />
                    <label htmlFor="dateNight">Date Night</label>
                    <input 
                        type="checkbox" 
                        id="drinks" 
                        name="drinks" 
                        checked={formEntry.eventType.drinks}
                        onChange={handleChange}
                    />
                    <label htmlFor="drinks">Drinks</label>
                    <input 
                        type="checkbox" 
                        id="brunch" 
                        name="brunch" 
                        checked={formEntry.eventType.brunch}
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
                        name="italian" 
                        checked={formEntry.foodType.italian}
                        onChange={handleChange}
                    />
                    <label htmlFor="italian">Italian</label>
                    <input 
                        type="checkbox" 
                        id="newAmerican" 
                        name="newAmerican" 
                        checked={formEntry.foodType.newAmerican}
                        onChange={handleChange}
                    />
                    <label htmlFor="newAmerican">New American</label>
                    <input 
                        type="checkbox" 
                        id="japanese" 
                        name="japanese" 
                        checked={formEntry.foodType.japanese}
                        onChange={handleChange}
                    />
                    <label htmlFor="japanese">Japanese</label>
                    <input 
                        type="checkbox" 
                        id="mexican" 
                        name="mexican" 
                        checked={formEntry.foodType.mexican}
                        onChange={handleChange}
                    />
                    <label htmlFor="mexican">Mexican</label>
                    <input 
                        type="checkbox" 
                        id="chinese" 
                        name="chinese" 
                        checked={formEntry.foodType.chinese}
                        onChange={handleChange}
                    />
                    <label htmlFor="chinese">Chinese</label>
                    <input 
                        type="checkbox" 
                        id="french" 
                        name="french" 
                        checked={formEntry.foodType.french}
                        onChange={handleChange}
                    />
                    <label htmlFor="french">French</label>
                    <input 
                        type="checkbox" 
                        id="mediterranean" 
                        name="mediterranean"
                        checked={formEntry.foodType.mediterranean}
                        onChange={handleChange}
                    />
                    <label htmlFor="mediterranean">Mediterranean</label>
                    <input 
                        type="checkbox" 
                        id="any" 
                        name="any" 
                        checked={formEntry.foodType.any}
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
                        name="inexpensive" 
                        checked={formEntry.price.inexpensive}
                        onChange={handleChange}
                    />
                    <label htmlFor="inexpensive">$$</label>
                    <input 
                        type="checkbox" 
                        id="midPriced" 
                        name="midPriced" 
                        checked={formEntry.price.midPriced}
                        onChange={handleChange}
                    />
                    <label htmlFor="midPriced">$$$</label>
                    <input 
                        type="checkbox" 
                        id="expensive" 
                        name="expensive" 
                        checked={formEntry.price.expensive}
                        onChange={handleChange}
                    />
                    <label htmlFor="expensive">$$$$</label>
                </fieldset>

                {/* button */}
                <button 
                    // onClick={handleSubmit}
                    className={spaceMono.className} 
                    type="submit"
                >
                Find me restaurants
                </button>

            </form>

        </div>
    );
}

export default FormBlock;