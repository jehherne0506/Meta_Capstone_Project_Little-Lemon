import './confirmation_order.css'
import { useLocation } from "react-router-dom"
import { useEffect } from 'react'

function Confirmation_Order(props){
    const location = useLocation()
    const {cost} = location.state || {}
    useEffect(()=>{
        props.setCartnum(0)
        props.setCartinfo([])
    },[])
        return(
            <div className="green-container">
                <h1>Order Successful!</h1>
                <p>Little Lemon Had Receive Your Order!</p>
                <p>Total Cost: ${cost}</p>
                <p>Your Food Should Arrive in Approximately 30 Minutes</p>
                <br></br>
                <p id='contact_error'>Please Contact (312) 593-2744 for any Wrong Info</p>
            </div>
        )
    }

export default Confirmation_Order