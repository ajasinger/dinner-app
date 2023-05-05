import { sora, spaceMono } from "../utils/fonts";
import { useState } from "react";

const FormBlock = () => {

    const initialState = {
        address1: '',
        address2: '',
        adddress3: '',
        state: '',
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

    const [formEntry, setFormEntry] = useState({ initialState });

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

        //save formEntry data  
       

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
                    <label>
                        State:
                        <select 
                            name="state"
                            value={formEntry.state} 
                            onChange={handleChange}
                            className={spaceMono.className}
                        >
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                            </select>
                    </label>
                </fieldset>

                {/* event type */}
                <fieldset className="form-event-type">
                    <legend><span className={spaceMono.className}>3.</span>Would you like options that are good for any of the below? (select any amount)</legend>
                    <input 
                        type="checkbox" 
                        id="meeting" 
                        name="meeting" 
                        checked={formEntry.meeting}
                        onChange={handleChange}
                    />
                    <label htmlFor="meeting">Meeting</label>
                    <input 
                        type="checkbox" 
                        id="dateNight" 
                        name="dateNight" 
                        checked={formEntry.dateNight}
                        onChange={handleChange}
                    />
                    <label htmlFor="dateNight">Date Night</label>
                    <input 
                        type="checkbox" 
                        id="drinks" 
                        name="drinks" 
                        checked={formEntry.drinks}
                        onChange={handleChange}
                    />
                    <label htmlFor="drinks">Drinks</label>
                    <input 
                        type="checkbox" 
                        id="brunch" 
                        name="brunch" 
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
                        name="italian" 
                        checked={formEntry.italian}
                        onChange={handleChange}
                    />
                    <label htmlFor="italian">Italian</label>
                    <input 
                        type="checkbox" 
                        id="newAmerican" 
                        name="newAmerican" 
                        checked={formEntry.newAmerican}
                        onChange={handleChange}
                    />
                    <label htmlFor="newAmerican">New American</label>
                    <input 
                        type="checkbox" 
                        id="japanese" 
                        name="japanese" 
                        checked={formEntry.japanese}
                        onChange={handleChange}
                    />
                    <label htmlFor="japanese">Japanese</label>
                    <input 
                        type="checkbox" 
                        id="mexican" 
                        name="mexican" 
                        checked={formEntry.mexican}
                        onChange={handleChange}
                    />
                    <label htmlFor="mexican">Mexican</label>
                    <input 
                        type="checkbox" 
                        id="chinese" 
                        name="chinese" 
                        checked={formEntry.chinese}
                        onChange={handleChange}
                    />
                    <label htmlFor="chinese">Chinese</label>
                    <input 
                        type="checkbox" 
                        id="french" 
                        name="french" 
                        checked={formEntry.french}
                        onChange={handleChange}
                    />
                    <label htmlFor="french">French</label>
                    <input 
                        type="checkbox" 
                        id="mediterranean" 
                        name="mediterranean"
                        checked={formEntry.mediterranean}
                        onChange={handleChange}
                    />
                    <label htmlFor="mediterranean">Mediterranean</label>
                    <input 
                        type="checkbox" 
                        id="any" 
                        name="any" 
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
                        name="inexpensive" 
                        checked={formEntry.inexpensive}
                        onChange={handleChange}
                    />
                    <label htmlFor="inexpensive">$$</label>
                    <input 
                        type="checkbox" 
                        id="midPriced" 
                        name="midPriced" 
                        checked={formEntry.midPriced}
                        onChange={handleChange}
                    />
                    <label htmlFor="midPriced">$$$</label>
                    <input 
                        type="checkbox" 
                        id="expensive" 
                        name="expensive" 
                        checked={formEntry.expensive}
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