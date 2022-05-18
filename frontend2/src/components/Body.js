import {Link} from 'react-router-dom';

function Body (props) {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };
    return (
        <body>
            <h1>Body</h1>
            <div style={navStyle}>
                <Link to="/aging">
                    <div>Aging</div>
                </Link>
                <Link to ="/discrimination">
                    <div>Anti-Discrimination</div>
                </Link>
                <Link to ="/childcare">
                    <div>Child Care</div>
                </Link>
                <Link to ="/volunteer">
                    <div>Volunteer</div>
                </Link>
                <Link to ="/support">
                    <div>Support Groups</div>
                </Link>
                <Link to ="/disabilities">
                    <div>Disabilities</div>
                </Link>
                <Link to ="/domesticviolence">
                    <div>Domestic Violence</div>
                </Link>
                <Link to="/education">
                    <div>Education</div>
                </Link>
                <Link to ="/employment">
                    <div>Employment</div>
                </Link>
                <Link to ="/health">
                    <div>Health</div>
                </Link>
                <Link to ="/homeless">
                    <div>Homeless</div>
                </Link>
                <Link to ="/housing">
                    <div>Housing</div>
                </Link>
                <Link to ="/immigration">
                    <div>Immigration</div>
                </Link>
                <Link to ="/legal">
                    <div>Legal Services</div>
                </Link>
                <Link to="/lgbtq">
                    <div>LGBTQ</div>
                </Link>
                <Link to ="/victim">
                    <div>Victim Services</div>
                </Link>
                <Link to ="/youth">
                    <div>Youth Services</div>
                </Link>
                <Link to ="/veteran">
                    <div>Veteran Families</div>
                </Link>
                
            </div>
            </body>
    );
}
    
    

export default Body;