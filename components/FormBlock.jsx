import styles from "@/styles/FormBlock.module.css";
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

    //event handlers for form entry
    const handleAddressChange = e => {
        setFormEntry({
            ...formEntry,
            [e.target.name] : e.target.value
        });
        console.log(formEntry);
    }

    const handleEventTypeChange = e => {
        setFormEntry({
            ...formEntry,
            eventType: {
                ...formEntry.eventType,
                [e.target.name] : e.target.checked
            } 
        });
        console.log(formEntry);
    }

    const handleFoodTypeChange = e => {
        setFormEntry({
            ...formEntry,
            foodType: {
                ...formEntry.foodType,
                [e.target.name] : e.target.checked
            } 
        });
        console.log(formEntry);
    }

    const handlePriceChange = e => {
        setFormEntry({
            ...formEntry,
            price: {
                ...formEntry.price,
                [e.target.name] : e.target.checked
            }
        });
        console.log(formEntry);
    }

    //event handler for submit
    const handleSubmit = event => {
        event.preventDefault();

        //variables to replace multi-word properties
        const dateNightString = "date night";
        const newAmericanString = "new american";
        const midPricedString = "mid-priced";

        //make new instance of formEntry to refer back to?

        //create prompt for API
        const neighborhoodSelections = `${address1}, ${address2}, ${address3}`;
        console.log(neighborhoodSelecctions)

        //using reduce()

        //using for loop
        
        //if value is true object.keys()
        //get object keys and use reducer function to accumulate onto string (if this is true I want to append aonto teh string) 
        //do a for loop 
        //make variable fo key name to prompt string 
        // for these if the value is true need the property's key 
        if(formEntry.eventType[e.target.checked]) {
                let eventSelections = '';
                eventSelections += `${e.target.name}, `;
             }
        //const foodSelections = string of all true food types 

        //const priceSelections = string of all true prices 

        //reset form to initial state
        setFormEntry({initialState});

    }
    
    return (

        <div className={styles.form}>

            {/* add in form destination and get or post*/}
            <form onSubmit={handleSubmit} action="/" method="post">

                {/* addreses */}
                <fieldset className={styles.addresses}>
                    <legend><span className={styles.number}>1.</span>Where is everyone coming from?</legend>
                    <label htmlFor="address1">Neighborhood 1:</label>
                    <input 
                        type="text" 
                        id="address1" 
                        name="address1" 
                        value={formEntry.address1} 
                        onChange={handleAddressChange} 
                        placeholder="enter the neighborhood" 
                    />
                    <br />
                    <label htmlFor="address2">Neighborhood 2:</label>
                    <input 
                        type="text" 
                        id="address2" 
                        name="address2" 
                        value={formEntry.address2} 
                        onChange={handleAddressChange} 
                        placeholder="enter the neighborhood"
                    />
                    <br />
                    <label htmlFor="address3">Neighborhood 3:</label>
                    <input 
                        type="text" 
                        id="address3" 
                        name="address3" 
                        value={formEntry.address3} 
                        onChange={handleAddressChange}
                        placeholder="enter the neighborhood"
                    />
                </fieldset>

                {/* event type */}
                <fieldset className={styles.eventType}>
                    <legend><span className={styles.number}>2.</span>Would you like options that are good for any of the below? (select any amount)</legend>
                    <input 
                        type="checkbox" 
                        id="meeting" 
                        name="meeting" 
                        checked={formEntry.eventType.meeting}
                        onChange={handleEventTypeChange}
                        // className={formEntry ? "checked" : ""}
                    />
                    <label htmlFor="meeting">Meeting</label>
                    <input 
                        type="checkbox" 
                        id="dateNight" 
                        name="dateNight" 
                        checked={formEntry.eventType.dateNight}
                        onChange={handleEventTypeChange}
                    />
                    <label htmlFor="dateNight">Date Night</label>
                    <input 
                        type="checkbox" 
                        id="drinks" 
                        name="drinks" 
                        checked={formEntry.eventType.drinks}
                        onChange={handleEventTypeChange}
                    />
                    <label htmlFor="drinks">Drinks</label>
                    <input 
                        type="checkbox" 
                        id="brunch" 
                        name="brunch" 
                        checked={formEntry.eventType.brunch}
                        onChange={handleEventTypeChange}
                    />
                    <label htmlFor="brunch">Brunch</label>
                </fieldset>

                {/* food types */}
                <fieldset className={styles.foodType}>
                    <legend><span className={styles.number}>3.</span>What type of food would you like to eat? (select any amount)</legend>
                    <input 
                        type="checkbox" 
                        id="italian" 
                        name="italian" 
                        checked={formEntry.foodType.italian}
                        onChange={handleFoodTypeChange}
                    />
                    <label htmlFor="italian">Italian</label>
                    <input 
                        type="checkbox" 
                        id="newAmerican" 
                        name="newAmerican" 
                        checked={formEntry.foodType.newAmerican}
                        onChange={handleFoodTypeChange}
                    />
                    <label htmlFor="newAmerican">New American</label>
                    <input 
                        type="checkbox" 
                        id="japanese" 
                        name="japanese" 
                        checked={formEntry.foodType.japanese}
                        onChange={handleFoodTypeChange}
                    />
                    <label htmlFor="japanese">Japanese</label>
                    <input 
                        type="checkbox" 
                        id="mexican" 
                        name="mexican" 
                        checked={formEntry.foodType.mexican}
                        onChange={handleFoodTypeChange}
                    />
                    <label htmlFor="mexican">Mexican</label>
                    <input 
                        type="checkbox" 
                        id="chinese" 
                        name="chinese" 
                        checked={formEntry.foodType.chinese}
                        onChange={handleFoodTypeChange}
                    />
                    <label htmlFor="chinese">Chinese</label>
                    <input 
                        type="checkbox" 
                        id="french" 
                        name="french" 
                        checked={formEntry.foodType.french}
                        onChange={handleFoodTypeChange}
                    />
                    <label htmlFor="french">French</label>
                    <input 
                        type="checkbox" 
                        id="mediterranean" 
                        name="mediterranean"
                        checked={formEntry.foodType.mediterranean}
                        onChange={handleFoodTypeChange}
                    />
                    <label htmlFor="mediterranean">Mediterranean</label>
                    <input 
                        type="checkbox" 
                        id="any" 
                        name="any" 
                        checked={formEntry.foodType.any}
                        onChange={handleFoodTypeChange}
                    />
                    <label htmlFor="any">Any</label>
                </fieldset>

                {/* price point */}
                <fieldset className={styles.price}>
                    <legend><span className={styles.number}>4.</span>What is your preferred price point? (select any amount)</legend>
                    <input 
                        type="checkbox" 
                        id="inexpensive" 
                        name="inexpensive" 
                        checked={formEntry.price.inexpensive}
                        onChange={handlePriceChange}
                    />
                    <label htmlFor="inexpensive">$$</label>
                    <input 
                        type="checkbox" 
                        id="midPriced" 
                        name="midPriced" 
                        checked={formEntry.price.midPriced}
                        onChange={handlePriceChange}
                    />
                    <label htmlFor="midPriced">$$$</label>
                    <input 
                        type="checkbox" 
                        id="expensive" 
                        name="expensive" 
                        checked={formEntry.price.expensive}
                        onChange={handlePriceChange}
                    />
                    <label htmlFor="expensive">$$$$</label>
                </fieldset>

                {/* button */}
                <button 
                    type="submit"
                >
                Find me restaurants
                </button>

            </form>

        </div>
    );
}

export default FormBlock;