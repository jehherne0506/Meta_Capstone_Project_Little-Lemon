import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function HamburgerMenu(props){
    return(
            <div id='hamburgerMenu' className="hamburgerMenu" onClick={()=>{props.setValue(!props.value)}}>
                   <FontAwesomeIcon icon={faBars} size='2xl' color='#495E57'/>
            </div>
    )
}
export default HamburgerMenu
