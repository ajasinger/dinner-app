

const FormBlock = () => {
    return (

        <div className="form-block">

            {/* add in form destination and get or post*/}
            <form className="form-block" action="/site-here" method="post">

                {/* addreses */}
                <fieldset className="form-addresses">
                    <legend><span className="number">1.</span>Where is everyone coming from?</legend>
                    <label for="first-address">Neighborhood 1:</label>
                    <input type="text" id="first-address" name="first-address" value="enter the name of a neightborhood" required />
                    <label for="second-address">Neighborhood 2:</label>
                    <input type="text" id="second-address" name="second-address" value="enter the name of a neightborhood" />
                    <label for="third-address">Neighborhood 3:</label>
                    <input type="text" id="third-address" name="third-address" value="enter the name of a neightborhood" />
                </fieldset>

                {/* mode of transportation */}
                <fieldset className="form-transportation">
                    <legend><span className="number">2.</span>How is everyone getting there? (select one)</legend>
                    <input type="radio" id="car" name="transportation" value="car" />
                    <label for="car">Car</label>
                    <input type="radio" id="public-transportation" name="transportation" value="public-transportation" />
                    <label for="public-transportation">Public Transportation</label>
                    <input type="radio" id="public-transportation-and-car" name="transportation" value="public-transportation-and-car" />
                    <label for="public-transportation-and-car">Public Transportation & Car</label>
                </fieldset>

                {/* event type */}
                <fieldset className="form-event-type">
                    <legend><span className="number">3.</span>Would you like options that are good for any of the below? (select any amount)</legend>
                    <input type="checkbox" id="meeting" name="event-type" value="meeting" />
                    <label for="meeting">Meeting</label>
                    <input type="checkbox" id="date-night" name="event-type" value="date-night" />
                    <label for="date-night">Date Night</label>
                    <input type="checkbox" id="drinks" name="event-type" value="drinks" />
                    <label for="drinks">Drinks</label>
                    <input type="checkbox" id="brunch" name="event-type" value="brunch" />
                    <label for="brunch">Brunch</label>
                </fieldset>

                {/* food types */}
                <fieldset className="form-food-type">
                    <legend><span className="number">4.</span>What type of food would you like to eat? (select any amount)</legend>
                    <input type="checkbox" id="italian" name="food-type" value="italian" />
                    <label for="italian">Italian</label>
                    <input type="checkbox" id="new-american" name="food-type" value="new-american" />
                    <label for="new-american">New American</label>
                    <input type="checkbox" id="japanese" name="food-type" value="japanese" />
                    <label for="japanese">Japanese</label>
                    <input type="checkbox" id="mexican" name="food-type" value="mexican" />
                    <label for="mexican">Mexican</label>
                    <input type="checkbox" id="chinese" name="food-type" value="chinese" />
                    <label for="chinese">Chinese</label>
                    <input type="checkbox" id="french" name="food-type" value="french" />
                    <label for="french">French</label>
                    <input type="checkbox" id="mediterranean" name="food-type" value="mediterranean" />
                    <label for="mediterranean">Mediterranean</label>
                    <input type="checkbox" id="any" name="food-type" value="any" />
                    <label for="any">Any</label>
                </fieldset>

                {/* price point */}
                <fieldset className="form-price">
                    <legend><span className="number">5.</span>What is your preferred price point? (select any amount)</legend>
                    <input type="checkbox" id="inexpensive" name="price" value="inexpensive" />
                    <label for="inexpensive">$$</label>
                    <input type="checkbox" id="moderate-price" name="price" value="moderate-price" />
                    <label for="moderate-price">$$$</label>
                    <input type="checkbox" id="expensive" name="price" value="expensive" />
                    <label for="expensive">$$$$</label>
                </fieldset>

                {/* button */}
                <button type="submit">Find me restaurants</button>

            </form>

        </div>
    );
}

export default FormBlock;