import './header.scss';

const Header = (props) => {
    if(props.type === "big"){
        return (
            <>
        <h1>{props.title}</h1>
        <p className="subtitle">{props.subtitle}</p>
        </>);
    }
    return <h1>{props.text}</h1>;
};

export default Header;

