import logo from '../../img/logistics-delivery.png';
import './NavBar.css';

function NavBar() {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a to='/' className="navbar-brand" >
                    <div className="d-flex align-items-center">
                        <img src={logo} alt="Logo cadeteria centro" width="60" className="me-3" />
                        <p className="mb-0">Cadeteria Centro</p>
                    </div>
                </a>
            </div>
        </nav>
    )


}


export default NavBar;