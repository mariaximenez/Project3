import {Link} from 'react-router-dom';
import "../index.css";

function Body (props) {
   
    return (
        <body>
            <h1 className='message'>Empowerment starts with seeking the help you need. NYC is rich with resources for women. This site allows you to search facilities by borough or category. Click a link and peruse the facilities. Visit the facility website or plan an in-person trip. NYC is here to help you.</h1>
            <div className="container_category">
                <Link to="/aging">
                    <div className='category_one'>Aging</div>
                </Link>
                <Link to ="/discrimination">
                    <div className='category_two'>Anti-Discrimination</div>
                </Link>
                <Link to ="/childcare">
                    <div className='category_three'>Child Care</div>
                </Link>
                <Link to ="/volunteer">
                    <div className='category_four'>Volunteer</div>
                </Link>
                <Link to ="/support">
                    <div className='category_five'>Support Groups</div>
                </Link>
                <Link to ="/disabilities">
                    <div className='category_six'>Disabilities</div>
                </Link>
                <Link to ="/domesticviolence">
                    <div className='category_seven'>Domestic Violence</div>
                </Link>
                <Link to="/education">
                    <div className='category_eight'>Education</div>
                </Link>
                <Link to ="/employment">
                    <div className='category_nine'>Employment</div>
                </Link>
                <Link to ="/health">
                    <div className='category_ten'>Health</div>
                </Link>
                <Link to ="/homeless">
                    <div className='category_eleven'>Homeless</div>
                </Link>
                <Link to ="/housing">
                    <div className='category_twelve'>Housing</div>
                </Link>
                <Link to ="/immigration">
                    <div className='category_thirteen'>Immigration</div>
                </Link>
                <Link to ="/legal">
                    <div className='category_fourteen'>Legal Services</div>
                </Link>
                <Link to="/lgbtq">
                    <div className='category_fifteen'>LGBTQ</div>
                </Link>
                <Link to ="/victim">
                    <div className='category_sixteen'>Victim Services</div>
                </Link>
                <Link to ="/youth">
                    <div className='category_seventeen'>Youth Services</div>
                </Link>
                <Link to ="/veteran">
                    <div className='category_eighteen'>Veteran Families</div>
                </Link>
                
            </div>
            </body>
    );
}
    
    

export default Body;