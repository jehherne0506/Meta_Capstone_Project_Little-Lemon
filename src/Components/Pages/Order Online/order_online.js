import './order_online.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function Order_Online(props){
    const totalItems = props.cartinfo.reduce((sum,each_food) => sum+=each_food.value,0)
    let totalPrice = 0
    const navigate = useNavigate()
    return(
        <div className="order_online">
            <h1>Your Cart</h1>
            <div className='grid_row'>
                <h2>Total Items ({totalItems})</h2>
                <h2> </h2>
                <h2>Price</h2>
            </div>
            <div className='all_cart_foods'>
                {props.cartinfo.map(each_cart_food=>{
                    return (
                        <div className="eachfood">
                            <div>
                                <img src={each_cart_food.link} alt='Little Lemon Food' />
                            </div>
                            <div>
                                <h2>{each_cart_food.name}</h2>
                                <h3>{each_cart_food.type}</h3>
                                <div className='gridrow'>
                                    <button><FontAwesomeIcon icon={faTrash} onClick={()=>{
                                        const updatedcartinfo = props.cartinfo.map(eachfood=>{
                                            if(eachfood.name===each_cart_food.name){
                                                return{
                                                    ...eachfood,
                                                    value:eachfood.value>0?eachfood.value-1:0
                                                }
                                            }
                                            return eachfood
                                        })
                                        props.setCartinfo(updatedcartinfo)
                                    }} /></button>
                                    <h3>{each_cart_food.value}</h3>
                                    <button><FontAwesomeIcon icon={faPlus} onClick={()=>{
                                        const updatedcartinfo = props.cartinfo.map(eachfood=>{
                                            if(eachfood.name===each_cart_food.name){
                                                return{...eachfood,value:eachfood.value+1}
                                            }
                                            return eachfood
                                        })
                                        props.setCartinfo(updatedcartinfo)
                                    }} /></button>
                                </div>
                            </div>
                            <div>
                                <h3>{`$${(each_cart_food.price_cal*each_cart_food.value).toFixed(2)}`}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='order_summary'>
                <h1>Order Summary</h1>
                {props.cartinfo.map(each_food=>{
                    totalPrice+=(each_food.price_cal*each_food.value)
                })}
                <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                <h2>Delivery Fee: $15</h2>
                <br></br>
                <hr></hr>
                <h2>Order Total: ${(totalPrice+15).toFixed(2)}</h2>
                <button disabled={totalItems===0?true:false} onClick={()=>{
                    const total = `${(totalPrice+15).toFixed(2)}`
                    navigate('/confirmation_order',{state:{cost:total,order:props.cartinfo}})}}>Place Order</button>
            </div>
        </div>
    )
}

export default Order_Online