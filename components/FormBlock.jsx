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
            "Dinner": false,
            "Meeting": false,
            "Date Night": false, 
            "Drinks": false,
            "Brunch": false
        },
        foodType: {
            "Italian": false,
            "New American": false,
            "Japanese": false,
            "Mexican": false,
            "Chinese": false,
            "French": false,
            "Mediterranean": false,
            "Any": false
        },
        price: {
            "$$": false,
            "$$$": false,
            "$$$$": false
        }
    }

    const [formEntry, setFormEntry] = useState(initialState);
    const [restaurantRecs, setRestaurantRecs] = useState("");
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
        // re-route to answer page on submit?
        // router.push("/answer");
        setRestaurantRecs("");
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

        try {
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

            if(response.ok) {
                setRecsLoading(false);
                //receive response from POST request and convert to json 
                const data = await response.json();
                console.log(data);
                setRestaurantRecs(data.restaurantRecs);
                console.log(restaurantRecs);
            }
        } catch(error) {
            console.log(error);
            setRecsLoadingError(true);
        }

        // re-set form?
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

                {/* event type mapped */}
                <fieldset className={styles.eventType}>
                    <legend className={styles.inputTitle}><span className={styles.number}>2.</span>  What type of event is it? (select any amount)</legend>
                    {
                        Object.keys(formEntry.eventType).map((eventCheckbox, i) => {
                            return(
                                <div key={i}>
                                    <input 
                                        type="checkbox" 
                                        id={`eventType-${i}`}
                                        name={eventCheckbox} 
                                        checked={formEntry.eventType.value}
                                        onChange={handleEventTypeChange}
                                        className={styles.checkbox}
                                    />
                                    <label htmlFor={eventCheckbox} className={styles.checkboxLabel}>{eventCheckbox}</label>
                                </div>
                            )
                        })
                    }
                </fieldset>

                {/* food types mapped*/}        
                <fieldset className={styles.foodType}>
                <legend className={styles.inputTitle}><span className={styles.number}>3.</span>  What type of food would you like to eat? (select any amount)</legend>
                    {
                        Object.keys(formEntry.foodType).map((foodCheckbox, i) => {
                            return(
                                <div key={i}>
                                    <input 
                                        type="checkbox" 
                                        id={`foodType-${i}`}
                                        name={foodCheckbox} 
                                        checked={formEntry.foodType.value}
                                        onChange={handleFoodTypeChange}
                                        className={styles.checkbox}
                                    />
                                    <label htmlFor={foodCheckbox} className={styles.checkboxLabel}>{foodCheckbox}</label>
                                </div>
                            )
                        })
                    }
                </fieldset>

                {/* price point mapped*/}
                <fieldset className={styles.price}>
                    <legend className={styles.inputTitle}><span className={styles.number}>4.</span>  What is your preferred price point? (select any amount)</legend>
                    {
                        Object.keys(formEntry.price).map((priceCheckbox, i) => {
                            return(
                                <div key={i}>
                                    <input 
                                        type="checkbox" 
                                        id={`price-${i}`}
                                        name={priceCheckbox} 
                                        checked={formEntry.price.value}
                                        onChange={handlePriceChange}
                                        className={styles.checkbox}
                                    />
                                    <label htmlFor={priceCheckbox} className={styles.checkboxLabel}>{priceCheckbox}</label>
                                </div>
                            )
                        })
                    }
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

            <div className={styles.answerSection}>
                <div className={styles.loadingSection}>
                    { recsLoading && <p className={styles.loading}>your recommendations will be here soon</p> }
                    { recsLoadingError && <p>something went wrong,please try again.</p>}
                </div>
                { restaurantRecs && <p>{ restaurantRecs }</p> }
            </div>

        </div>
    );
}

export default FormBlock;