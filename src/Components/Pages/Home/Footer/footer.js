import './footer.css'
import logo from '../../../Images/logo-white.png'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    const navigate = useNavigate()
    const navigate_site = (props) =>{
        window.location.href = `https://${props}.com`
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return(
        <div className='footers'>
            <>
                <img className='footer_logo' src={logo} alt='Little Lemon Logo' />
            </>
            <div className='flex_column'>
                <h2>SITEMAP</h2>
                <h3 className='nav_inner_site' onClick={()=>{navigate('/'); scrollToTop()}}>Home</h3>
                <h3 className='nav_inner_site' onClick={()=>{navigate('/menu'); scrollToTop()}}>Menu</h3>
                <h3 className='nav_inner_site' onClick={()=>{navigate('/reservations'); scrollToTop()}}>Reservations</h3>
                <h3 className='nav_inner_site' onClick={()=>{navigate('/order_online'); scrollToTop()}}>Order Online</h3>
            </div>
            <div className='flex_column'>
                <h2>CONTACT US</h2>
                <div className='flex_row'>
                    <FontAwesomeIcon className='icon' icon={faLocationDot} color='white' />
                    <h3>678 Pisa Ave, Chicago, IL 60611</h3>
                </div>
                <div className='flex_row'>
                    <FontAwesomeIcon className='icon' icon={faPhone} color='white' />
                    <h3>(312) 593-2744</h3>
                </div>
                <div className='flex_row'>
                    <FontAwesomeIcon className='icon' icon={faEnvelope} color='white' />
                    <h3>customer@littlelemon.com</h3>
                </div>
            </div>
            <div className='flex_column' id='no_padding'>
                <h2>Connect With Us</h2>
                <div className='flex_row_icon'>
                    <FontAwesomeIcon onClick={()=>navigate_site('facebook')} className='icon_brands' icon={faFacebook} color='white' />
                    <FontAwesomeIcon onClick={()=>navigate_site('instagram')} className='icon_brands' icon={faInstagram} color='white' />
                    <FontAwesomeIcon onClick={()=>navigate_site('youtube')} className='icon_brands' icon={faYoutube} color='white' />
                </div>
            </div>
        </div>
    )
}

export default Footer