import './Searchbar.scss';
import Button from '../Button';
import SearchOptions from '../searchOptions';

const Searchbar = (props) => {
    

    return (
    <>
        <input onChange={props.handleChange} name={props.searchName} className="searchbar" type="text" placeholder={props.searchPlaceholder} />
        <br/>
        <SearchOptions handleChange={props.optionsChange}/>
        <Button color={props.btnColor} handleClick={props.btnClicked} buttonText={props.btnTxt} />

    </>
        );
};



export default Searchbar;

