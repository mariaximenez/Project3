import {Link} from 'react-router-dom';

function Header (props) {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };
    return (
        <header>
            <h1>Header</h1>
            <nav style={navStyle}>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to ="/facility">
                    <div>Facility Dropdown Menu</div>
                </Link>
                <Link to ="/bronx">
                    <div>Bronx Facilities</div>
                </Link>
                <Link to ="/brooklyn">
                    <div>Brooklyn Facilities</div>
                </Link>
                <Link to ="/manhattan">
                    <div>Manhattan Facilities</div>
                </Link>
                <Link to ="/statenisland">
                    <div>Staten Island Facilities</div>
                </Link>
                <Link to ="/queens">
                    <div>Queens Facilities</div>
                </Link>
            </nav>
            </header>
    );
}
    
    

export default Header;