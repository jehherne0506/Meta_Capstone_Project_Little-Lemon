import './confirmation_order.css'
import { useLocation } from "react-router-dom"
import { useEffect } from 'react'

function Confirmation_Order(props){
    const location = useLocation()
    const {cost,order} = location.state || {}
    let count = 0
    useEffect(()=>{
        props.setCartnum(0)
        props.setCartinfo([])
    },[])
        return(
            <div className="green-container">
                <h1>Order Successful!</h1>
                <h2>Little Lemon Had Receive Your Order!</h2>
                <h3>Order:</h3>
                {order.map(each_order=>{
                    count+=1
                    return <p>{count}: {each_order.name} ({each_order.value})</p>
                })}
                <p id='total_cost'>Total Cost: ${cost}</p>
                <p>Your Food Should Arrive in Approximately 30 Minutes</p>
                <br></br>
                <p id='contact_error'>Please Contact (312) 593-2744 for any Wrong Info</p>
            </div>
        )
    }

export default Confirmation_Order