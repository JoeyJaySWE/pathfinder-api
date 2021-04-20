


const SearchOptions = (props) => {

    

    return (
        <section className="radioBtns">
            <label htmlFor='armor'>Armors</label>
            <input onChange={props.handleChange} type='radio' name='itemType' value='armor'></input>
            <label htmlFor='weapons'>Weapons</label>
            <input onChange={props.handleChange} type='radio' name='itemType' value='weapons'></input>
            <label htmlFor='items'>Items</label>
            <input onChange={props.handleChange} type='radio' name='itemType' value='items'></input>
        </section>
    );
};

export default SearchOptions;