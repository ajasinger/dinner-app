import styles from "./FormBlock.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const FormBlock = () => {
    const router = useRouter();

    const initialState = {
        address1: "",
        address2: "",
        address3: "",
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
    const [restaurantRecs, setRestaurantRecs] = useState("");
    //also in AnswerBlock
    const [recsLoading, setRecsLoading] = useState(false);
    const [recsLoadingError, setRecsLoadingError] = useState(false);

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
    const handleSubmit = async (event) => {
        event.preventDefault();
        // router.push("/answer");
        setRecsLoading(true);

        //define variables for API prompt using for..in loop
        let eventString = "";
        let foodString = "";
        let priceString = "";
        let addressString = "";

        for (const selectionCategory in formEntry) {
            const dateNightString = "date night";
            const newAmericanString = "new american";
            const midPricedString = "mid-priced";
            const selectionObject = formEntry[selectionCategory];

            if (selectionCategory === "address1" || "address2" || "address3") {
                    addressString += `${selectionObject}, `;
            }
            for (const selectionType in selectionObject) {
                if(selectionCategory === "eventType" && selectionObject[selectionType] && selectionType === 'dateNight') {
                    eventString += `${dateNightString}, `;
                } else if(selectionCategory === "eventType" && selectionObject[selectionType]) {
                    eventString += `${selectionType}, `;
                } else if(selectionCategory === "foodType" && selectionObject[selectionType] && selectionType === 'newAmerican') {
                    foodString += `${newAmericanString}, `;
                } else if(selectionCategory === "foodType" && selectionObject[selectionType]) {
                    foodString += `${selectionType}, `;
                } else if(selectionCategory === "price" && selectionObject[selectionType] && selectionType === 'midPriced') {
                    priceString += `${midPricedString}, `;
                } else if(selectionCategory === "price" && selectionObject[selectionType]) {
                    priceString += `${selectionType}, `;
                }
            }
        };

        console.log(addressString);

        const response = await fetch("/api/recommendations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                addressString,
                eventString,
                foodString,
                priceString
            })
        });

        console.log(response);

        // if(response) {
        //     try {
        //         setRestaurantRecs("");
        //         setRecsLoadingError(false);

        //         const body = await response.json();
        //         setRestaurantRecs(body.restaurantRecs);
        //         console.log(restaurantRecs);

        //     } catch(error) {
        //         console.log(error);
        //         setRecsLoadingError(true);
        //     } 

        // }
        
        //receive response from POST request and convert to json 
        setRecsLoading(false);
        const data = await response.json();
        console.log(data);
        setRestaurantRecs(data.restaurantRecs);
        console.log(restaurantRecs);

        // setFormEntry({initialState});

    };
    
    return (

        <div className={styles.form}>

            <form onSubmit={handleSubmit}>

                {/* addreses */}
                <fieldset className={styles.addresses}>
                    <legend className={styles.inputTitle}><span className={styles.number}>1.</span>  Where is everyone coming from?</legend>
                    <label htmlFor="address1" className={styles.textLabel}>Neighborhood 1:</label>
                    <input 
                        type="text" 
                        id="address1" 
                        name="address1" 
                        value={formEntry.address1} 
                        onChange={handleAddressChange} 
                        placeholder="enter a New York neighborhood name" 
                        className={styles.textBox}
                        required
                    />
                    <br />
                    <label htmlFor="address2" className={styles.textLabel}>Neighborhood 2:</label>
                    <input 
                        type="text" 
                        id="address2" 
                        name="address2" 
                        value={formEntry.address2} 
                        onChange={handleAddressChange} 
                        placeholder="enter a New York neighborhood name"
                        className={styles.textBox}
                    />
                    <br />
                    <label htmlFor="address3" className={styles.textLabel}>Neighborhood 3:</label>
                    <input 
                        type="text" 
                        id="address3" 
                        name="address3" 
                        value={formEntry.address3} 
                        onChange={handleAddressChange}
                        placeholder="enter a New York neighborhood name"
                        className={styles.textBox}
                    />
                </fieldset>

                {/* event type */}
                <fieldset className={styles.eventType}>
                    <legend className={styles.inputTitle}><span className={styles.number}>2.</span>  What type of event is it? (select any amount)</legend>
                    <div>
                        <input 
                            type="checkbox" 
                            id="meeting" 
                            name="meeting" 
                            checked={formEntry.eventType.meeting}
                            onChange={handleEventTypeChange}
                            // className={formEntry ? "checked" : ""}
                        />
                        <label htmlFor="meeting" className={styles.checkboxLabel}>Meeting</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            id="dateNight" 
                            name="dateNight" 
                            checked={formEntry.eventType.dateNight}
                            onChange={handleEventTypeChange}
                            className={styles.checkbox}
                        />
                        <label htmlFor="dateNight" className={styles.checkboxLabel}>Date Night</label>
                    </div> 
                    <div>   
                        <input 
                            type="checkbox" 
                            id="drinks" 
                            name="drinks" 
                            checked={formEntry.eventType.drinks}
                            onChange={handleEventTypeChange}
                            className={styles.checkbox}
                        />
                        <label htmlFor="drinks" className={styles.checkboxLabel}>Drinks</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            id="brunch" 
                            name="brunch" 
                            checked={formEntry.eventType.brunch}
                            onChange={handleEventTypeChange}
                            className={styles.checkbox}
                        />
                        <label htmlFor="brunch" className={styles.checkboxLabel}>Brunch</label>
                    </div>
                </fieldset>

                {/* food types */}
                <fieldset className={styles.foodType}>
                    <legend className={styles.inputTitle}><span className={styles.number}>3.</span>  What type of food would you like to eat? (select any amount)</legend>
                    <div>
                        <input 
                            type="checkbox" 
                            id="italian" 
                            name="italian" 
                            checked={formEntry.foodType.italian}
                            onChange={handleFoodTypeChange}
                        />
                        <label htmlFor="italian" className={styles.checkboxLabel}>Italian</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            id="newAmerican" 
                            name="newAmerican" 
                            checked={formEntry.foodType.newAmerican}
                            onChange={handleFoodTypeChange}
                            className={styles.checkbox}
                        />
                        <label htmlFor="newAmerican" className={styles.checkboxLabel}>New American</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            id="japanese" 
                            name="japanese" 
                            checked={formEntry.foodType.japanese}
                            onChange={handleFoodTypeChange}
                            className={styles.checkbox}
                        />
                        <label htmlFor="japanese" className={styles.checkboxLabel}>Japanese</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            id="mexican" 
                            name="mexican" 
                            checked={formEntry.foodType.mexican}
                            onChange={handleFoodTypeChange}
                            className={styles.checkbox}
                        />
                        <label htmlFor="mexican" className={styles.checkboxLabel}>Mexican</label>
                        </div>
                    <div>
                        <input 
                            type="checkbox" 
                            id="chinese" 
                            name="chinese" 
                            checked={formEntry.foodType.chinese}
                            onChange={handleFoodTypeChange}
                            className={styles.checkbox}
                        />
                        <label htmlFor="chinese" className={styles.checkboxLabel}>Chinese</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            id="french" 
                            name="french" 
                            checked={formEntry.foodType.french}
                            onChange={handleFoodTypeChange}
                            className={styles.checkbox}
                        />
                        <label htmlFor="french" className={styles.checkboxLabel}>French</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            id="mediterranean" 
                            name="mediterranean"
                            checked={formEntry.foodType.mediterranean}
                            onChange={handleFoodTypeChange}
                            className={styles.checkbox}
                        />
                        <label htmlFor="mediterranean" className={styles.checkboxLabel}>Mediterranean</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            id="any" 
                            name="any" 
                            checked={formEntry.foodType.any}
                            onChange={handleFoodTypeChange}
                            className={styles.checkbox}
                        />
                        <label htmlFor="any" className={styles.checkboxLabel}>Any</label>
                    </div>
                </fieldset>

                {/* price point */}
                <fieldset className={styles.price}>
                    <legend className={styles.inputTitle}><span className={styles.number}>4.</span>  What is your preferred price point? (select any amount)</legend>
                    <div>
                        <input 
                            type="checkbox" 
                            id="inexpensive" 
                            name="inexpensive" 
                            checked={formEntry.price.inexpensive}
                            onChange={handlePriceChange}
                        />
                        <label htmlFor="inexpensive" className={styles.checkboxLabel}>$$</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            id="midPriced" 
                            name="midPriced" 
                            checked={formEntry.price.midPriced}
                            onChange={handlePriceChange}
                            className={styles.checkbox}
                        />
                        <label htmlFor="midPriced" className={styles.checkboxLabel}>$$$</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            id="expensive" 
                            name="expensive" 
                            checked={formEntry.price.expensive}
                            onChange={handlePriceChange}
                            className={styles.checkbox}
                        />
                        <label htmlFor="expensive" className={styles.checkboxLabel}>$$$$</label>
                    </div>
                </fieldset>

                {/* button */}
                <button 
                    type="submit"
                    className={styles.submitButton}
                    disabled={recsLoading}
                >
                Find me restaurants
                </button>

            </form>

            {/* also in AnswerBlock */}
            <div className={styles.answerSection}>
                { recsLoading && "your recommendations will be here soon..." }
                { recsLoadingError && "something went wrong,please try again."}
                { restaurantRecs && <p>{ restaurantRecs }</p> }
            </div>

        </div>
    );
}

export default FormBlock;