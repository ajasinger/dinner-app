

const FormBlock = () => {
    return (

        <div className="form-block">

            {/* add in form destination */}
            <form className="form-block" action="/site-here" method="post">

                {/* addreses */}
                <section className="form-addresses">
                    <p><span className="number">1.</span>Where is everyone coming from?</p>
                    <label for="first-address">Neighborhood 1:</label>
                    <input type="text" id="first-address" name="first-address" value="enter the name of a neightborhood" required />
                    <label for="second-address">Neighborhood 2:</label>
                    <input type="text" id="second-address" name="second-address" value="enter the name of a neightborhood"/>
                    <label for="third-address">Neighborhood 3:</label>
                    <input type="text" id="third-address" name="third-address" value="enter the name of a neightborhood"/>
                </section>

                {/* mode of transportation */}
                <section className="form-transportation">
                    <p><span className="number">2.</span>How is everyone getting there?</p>
                    <input type="radio" id="car" name="transportation" value="car" />
                    <label for="car">Car</label>
                    <input type="radio" id="public-transport" name="transportation" value="public-transport" />
                    <label for="public-transport">Public Transportation</label>
                    <input type="radio" id="public-transport-and-car" name="transportation" value="public-transport-and-car" />
                    <label for="public-transport-and-car">Car & Public Transportation</label>
                </section>
                
                {/* food types */}
                <label for="food">What type of food you'd like to eat:</label>
                <input type="checkbox" id="food1" name="food1" value="Italian" />
                <label for="food1"> Italian</label>
                <input type="checkbox" id="food2" name="food2" value="American" />
                <label for="food2"> American</label>
                <input type="checkbox" id="food3" name="food3" value="Japanese" />
                <label for="food3"> Japanese</label>
                <input type="checkbox" id="food4" name="food4" value="Mexican" />
                <label for="food4"> Mexican</label>
                <input type="checkbox" id="food5" name="food5" value="Chinese" />
                <label for="food5"> Chinese</label>
                <input type="checkbox" id="food6" name="food6" value="Vegetarian" />
                <label for="food6"> Vegetarian</label>
                <input type="checkbox" id="food7" name="food7" value="any" />
                <label for="food7"> Any type</label>
                
                {/* price point */}
                <input type="checkbox" id="price1" name="price1" value="inexpensive" />
                <label for="price1"> $$</label>
                <input type="checkbox" id="price2" name="price2" value="moderate-price" />
                <label for="price2"> $$$</label>
                <input type="checkbox" id="price3" name="price3" value="expensive" />
                <label for="price3"> $$$$</label>
                
                {/* button */}
                <button type="submit">Find me restaurants</button>
            
            </form>
            
        </div>
    );
}

export default FormBlock;