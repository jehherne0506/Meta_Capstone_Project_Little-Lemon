import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function HeaderCartImg(){
    return(
        <>
            <FontAwesomeIcon icon={faCartShopping} className='cart' size='xl' color='#495E57'/>
            <label>0</label>
        </>
    )
}

export default HeaderCartImg