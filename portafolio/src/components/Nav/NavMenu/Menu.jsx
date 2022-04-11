import BtnAboutMe from "../../Buttons/BtnAboutMe";
import BtnContacts from "../../Buttons/BtnContacts";
import BtnCurriculum from "../../Buttons/BtnCurriculum";
import BtnHome from "../../Buttons/BtnHome";
import BtnMenu from "../../Buttons/BtnMenu";
import BtnProjects from "../../Buttons/BtnProjects";
import "../Nav.css/NavMenu.Css/Menu.css"

function Menu() {
    return(
        <div className="dropdown justify-content-md-center" >
          <BtnMenu/>
            <ul className="dropdown-menu">
              <li><BtnHome/></li>
              <li><BtnAboutMe/></li>
              <li><BtnContacts/></li>
              <li><BtnCurriculum/></li>
              <li><BtnProjects/></li>
            </ul>
        </div>
    )
}
export default Menu;