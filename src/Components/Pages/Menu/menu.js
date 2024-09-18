import './menu.css'
import greeksalad from '../../Images/greek_salad.jpg'
import bruschetta from '../../Images/bruschetta.jpg'
import lemondessert from '../../Images/lemon_dessert.jpg'
import pasta from '../../Images/pasta.jpg'
import pizza from '../../Images/pizza.jpg'
import maggi from '../../Images/maggi.jpg'
import gheeidli from '../../Images/ghee_idli.jpg'
import meatsalad from '../../Images/meal.jpg'
import onionravva from '../../Images/onion_ravva.jpg'
import plaindosa from '../../Images/plain_dosa.jpg'
import poori from '../../Images/poori.jpg'
import classicsandwich from '../../Images/sandwich.jpg'
import malaysiansandwich from '../../Images/sandwich2.jpg'
import vada from '../../Images/vada.jpg'
import vegeparadise from '../../Images/veggie.jpg'
import chocolateshake from '../../Images/choclate shake.jpg'
import coffee from '../../Images/coffe.jpg'
import strawberryshake from '../../Images/strawberry shake.jpg'
import { useEffect } from 'react'

function Menu(props){
    const all_foods = [
        {name:'Greek Salad',type:'Main Dish',price_show:'$12.99',price_cal:12.99,link:greeksalad},
        {name:'Bruschetta',type:'Side Dish',price_show:'$9.99',price_cal:9.99,link:bruschetta},
        {name:'Lemon Dessert',type:'Dessert',price_show:'$7.99',price_cal:7.99,link:lemondessert},
        {name:'Pasta',type:'Main Dish',price_show:'$14.99',price_cal:14.99,link:pasta},
        {name:'Pizza',type:'Main Dish',price_show:'$20.99',price_cal:20.99,link:pizza},
        {name:'Malaysian Maggi',type:'Main Dish',price_show:'$13.99',price_cal:13.99,link:maggi},
        {name:'Ghee Idli',type:'Main Dish',price_show:'$14.99',price_cal:14.99,link:gheeidli},
        {name:'Meat Salad',type:'Main Dish',price_show:'$13.99',price_cal:13.99,link:meatsalad},
        {name:'Onion Ravva',type:'Side Dish',price_show:'$10.99',price_cal:10.99,link:onionravva},
        {name:'Plain Dosa',type:'Side Dish',price_show:'$7.99',price_cal:7.99,link:plaindosa},
        {name:'Poori',type:'Side Dish',price_show:'$9.99',price_cal:9.99,link:poori},
        {name:'Classic Sandwich',type:'Side Dish',price_show:'$6.99',price_cal:6.99,link:classicsandwich},
        {name:'Malaysian Sandwich',type:'Side Dish',price_show:'$6.99',price_cal:6.99,link:malaysiansandwich},
        {name:'Vada',type:'Side Dish',price_show:'$7.99',price_cal:7.99,link:vada},
        {name:'Vege Paradise',type:'Side Dish',price_show:'$7.99',price_cal:7.99,link:vegeparadise},
        {name:'Coffee',type:'Beverage',price_show:'$4.99',price_cal:4.99,link:coffee},
        {name:'Chocolate Shake',type:'Beverage',price_show:'$7.99',price_cal:7.99,link:chocolateshake},
        {name:'Strawberry Shake',type:'Beverage',price_show:'$7.99',price_cal:7.99,link:strawberryshake},
    ]
    useEffect(()=>{
        console.log(props.cartinfo)
    },[props.cartinfo])
    return(
        <div className='menu'>
            <h1>Little Lemon Menu</h1>
            <div className="all_foods">
                {all_foods.map(each_food=>{
                    return (
                        <div className="each_food">
                            <img src={each_food.link} alt='Little Lemon Food' />
                            <h2>{each_food.name}</h2>
                            <h3>{each_food.type}</h3>
                            <div className='flex_row'>
                                <h3>{each_food.price_show}</h3>
                                <button onClick={()=>{
                                    let found = false
                                    props.setCartnum(props.cartnum+1)
                                    props.cartinfo.forEach(cart_food => {
                                        if(cart_food.name===each_food.name){
                                            cart_food.value=cart_food.value+1
                                            found = true
                                        }
                                    });
                                    if (!found){
                                        props.setCartinfo([...props.cartinfo, {name:each_food.name,type:each_food.type,price_show:each_food.price_show,price_cal:each_food.price_cal,link:each_food.link,value:1}])
                                    }
                                }}>Add</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu