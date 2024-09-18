import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../../../Layout/header.css';

function HeaderCartImg(props){
    const navigate = useNavigate()
    return(
        <div className='cart' onClick={()=>{navigate('./order_online')}}>
            <FontAwesomeIcon icon={faCartShopping} className='cart' size='xl' color='#495E57'/>
            <label>{props.cartnum}</label>
        </div>
    )
}

export default HeaderCartImg