
import { Link } from 'react-router-dom';

function LeftNavbar(props) {
    return (
        <>
            <div className="navbox">
                <Link to={'/'}>
                    <div className="homei"></div>
                </Link>
                <Link to={'/chanel'}>
                    <div className="shorti"></div>
                </Link>
                <Link to={'/search'}>
                
                
                    <div className="subsi"></div>

                </Link> 
                    <div className="libraryi"></div>
                

            </div>
        </>
    );
}

export default LeftNavbar;