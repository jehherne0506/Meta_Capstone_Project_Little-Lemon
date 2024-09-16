import './testimonial.css'
import firstcustomer from '../../../Images/customer1.jpg'
import secondcustomer from '../../../Images/customer2.jpg'
import thirdcustomer from '../../../Images/customer3.jpg'
import fourthcustomer from '../../../Images/customer4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Testimonial(){
    return(
        <div className='testimonial'>
            <h1>What People Say About Us!</h1>
            <div className='all_reviews'>
                <div className='review'>
                    <img src={firstcustomer} alt='First Customer' />
                    <h2>Maria Sanchez</h2>
                    <div className='stars'>
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    </div>
                    <p>Incredible experience at Little Lemon! The food was fresh, flavorful, and beautifully presented. The staff was super friendly, and they made us feel at home from the moment we walked in. I highly recommend the Lemon Dessert—it’s a must-try! Will definitely be coming back.</p>
                </div>
                <div className='review'>
                    <img src={secondcustomer} alt='Second Customer' />
                    <h2>Antony Clifton</h2>
                    <div className='stars'>
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    </div>
                    <p>What a hidden gem! Little Lemon offers a delightful Mediterranean twist on classic dishes. The Greek salad was so fresh, and the homemade pita was the best I’ve ever had. Great atmosphere, perfect for a relaxed dinner with friends or family. Highly recommended!</p>
                </div>
                <div className='review'>
                    <img src={thirdcustomer} alt='Third Customer' />
                    <h2>Tamika Jackson</h2>
                    <div className='stars'>
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    </div>
                    <p>Absolutely loved my visit to Little Lemon! The service was impeccable, and the menu had such unique and delicious options. I had the grilled bruschetta, and it was out of this world. If you’re looking for a cozy spot with excellent food, look no further.</p>
                </div>
                <div className='review'>
                    <img src={fourthcustomer} alt='Fourth Customer' />
                    <h2>Brandon Ming</h2>
                    <div className='stars'>
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    <FontAwesomeIcon icon={faStar} color='#F4CE14' />
                    </div>
                    <p>Little Lemon is now one of my favorite spots in town! The staff is welcoming, and the food is top-notch. I had the lemon chicken, and it was tender and flavorful. The only downside is it gets a little busy, but that’s just a sign of how good it is. Make a reservation ahead!</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial