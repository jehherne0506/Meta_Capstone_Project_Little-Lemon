import './confirmation.css'
import { useLocation } from "react-router-dom"

function Confirmation(){
    const location = useLocation()
    const {name,date,time,guests,occasion} = location.state || {}
    return(
        <div className="green-container">
            <h1>Reservation Successful!</h1>
            <h2>Dear {name},</h2>
            <p>We, Little Lemon Had Confirm Your Reservation at {date},{time}</p>
            <p>Number of Guests: {guests}</p>
            <p>Occasion: {occasion}</p>
            <br></br>
            <p id='contact_error'>Please Contact (312) 593-2744 for any Wrong Info</p>
        </div>
    )
}

export default Confirmation