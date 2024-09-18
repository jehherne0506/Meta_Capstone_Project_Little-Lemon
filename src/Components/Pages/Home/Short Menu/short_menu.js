import {  useNavigate } from "react-router-dom";
import './short_menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import firstimg from '../../../Images/greek_salad.jpg'
import secondimg from '../../../Images/bruschetta.jpg'
import thirdimg from '../../../Images/lemon_dessert.jpg'

function ShortMenu(){
    const navigate = useNavigate()
    return(
    <>
        <div className="menu_special_start">
            <h1 className="week_special">This Week Specials!</h1>
            <button className="menu_button" onClick={()=>{navigate("/menu")}}>Online Menu</button>
        </div>
        <div className="menu_special_three">
            <div className="menu_food">
                <img src={firstimg} alt="Greek Salad" />
                <div className="basic_info">
                    <h2 className="name">Greek Salad</h2>
                    <h2 className="price">$12.99</h2>
                </div>
                <p className="desc">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <div className="orderonline" onClick={()=>{navigate("/menu")}}>
                    <label>Order for Delivery</label>
                    <FontAwesomeIcon icon={faMotorcycle} size="xl" color="#495E57" className="bikeicon"  />
                </div>
            </div>
            <div className="menu_food">
                <img src={secondimg} alt="Greek Salad" />
                <div className="basic_info">
                    <h2 className="name">Bruschetta</h2>
                    <h2 className="price">$9.99</h2>
                </div>
                <p className="desc">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <div className="orderonline" onClick={()=>{navigate("/menu")}}>
                    <label>Order for Delivery</label>
                    <FontAwesomeIcon icon={faMotorcycle} size="xl" color="#495E57" className="bikeicon" />
                </div>
            </div>
            <div className="menu_food">
                <img src={thirdimg} alt="Greek Salad" />
                <div className="basic_info">
                    <h2 className='name'>Lemon Dessert</h2>
                    <h2 className='price'>$7.99</h2>
                </div>
                <p className="desc">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <div className="orderonline" onClick={()=>{navigate("/menu")}}>
                    <label>Order for Delivery</label>
                    <FontAwesomeIcon icon={faMotorcycle} size="xl" color="#495E57" className="bikeicon" />
                </div>
            </div>
        </div>
    </>
    )
}

export default ShortMenu