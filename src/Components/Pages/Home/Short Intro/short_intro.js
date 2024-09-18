import intro from '../../../Images/intro.jpg'
import {  useNavigate } from "react-router-dom";
import './short_intro.css'

function Intro(){
    const navigate = useNavigate()
    const scrollToTop = () =>{
        window.scrollTo({top:0,behavior:'smooth'})
    }
    return(
        <main>
            <div className='text'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <h3>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
                <button onClick={()=>{navigate("/reservations"); scrollToTop()}}>Reserve a Table</button>
            </div>
            <div className='intro-container'>
                <img className='intro' src={intro} alt="Intro" />
            </div>
        </main>
    )
}

export default Intro