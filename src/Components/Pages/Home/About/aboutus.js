import './aboutus.css'
import chef1 from '../../../Images/chef1.jpg'
import chef2 from '../../../Images/chef2.jpg'

function AboutUs(){
    return(
        <div className='aboutus'>
            <div className='intro_all_texts'>
                <h1>Little Lemon</h1>
                <h2 className='chicago'>Chicago</h2>
                <p className='intro_text'>At Little Lemon, located in vibrant Chicago, we celebrate the power of food to unite. Our family-owned Mediterranean restaurant blends traditional recipes with a modern touch, using the finest ingredients to create authentic and memorable dishes. From savory mezze platters to lemon-infused chicken and freshly baked flatbreads, our menu highlights the best of Mediterranean cuisine. Step into our cozy, welcoming space and experience Mediterranean hospitality where each meal is a chance to share stories and laughter. Whether for a quick lunch or a special occasion, Little Lemon offers a journey through rich flavors and cultural tradition. Welcome to your new favorite spot!</p>
            </div>
            <div className='chef_images'>
                <img src={chef1} alt='Chef First Picture' />
                <img src={chef2} alt='Chef Second Picture' />
            </div>
        </div>
    )
}

export default AboutUs