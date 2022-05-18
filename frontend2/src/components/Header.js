import {Link} from 'react-router-dom';
import "../index.css";

function Header (props) {
    const navStyle = {
        display: "flex",
        justifyContent: "space-between",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };
    return (
        <>
        <header className="background-top">
              </header>
           <div class-Name="link-bar">
            <nav style={navStyle}>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to ="/facility">
                    <div>Facility Search</div>
                </Link>
                <Link to ="/bronx">
                    <div>Bronx</div>
                </Link>
                <Link to ="/brooklyn">
                    <div>Brooklyn</div>
                </Link>
                <Link to ="/manhattan">
                    <div>Manhattan</div>
                </Link>
                <Link to ="/statenisland">
                    <div>Staten Island</div>
                </Link>
                <Link to ="/queens">
                    <div>Queens</div>
                </Link>
            </nav>
            </div>
          </>
    );
}
    
    

export default Header;