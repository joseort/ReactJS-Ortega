import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <nav>
            <div className="logo"><img src="/jort-logo2.png" alt="" width="100"></img>Design</div>

            <div className="navbar">
                <ul className="nav-menu">
                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">SignUp</a></li>
                </ul>
                <CartWidget />
            </div>

            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            
        </nav>

    )
}