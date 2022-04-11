import Menu from "./NavMenu/Menu";
import "./Nav.css/Nav.css"
function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{background_color: "#09232E"}}>
            <div className="container-fluid">
                <Menu/>
            </div>
        </nav>
    )
}
export default Nav;