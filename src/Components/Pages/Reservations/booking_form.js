import './booking_form.css'
import { fetchAPI,submitAPI } from './interact_api'
import {  useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {  useFormik } from 'formik'
import * as Yup from 'yup'
import 'react-phone-input-2/lib/style.css'

function BookingForm(){
    const [booking_data,setBooking_Data] = useState({date:'',time:'',guests:1,occasion:'Birthday',requests:''})
    const [available_times,setAvailable_times] = useState([])
    const [ischecked,setIsChecked] = useState()
    const [firstchecked,setFirstchecked] = useState(true)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            phoneNumber:''
        },
        validationSchema: Yup.object({
            name:Yup.string()
            .required('Name Cannot Be Left Empty'),
            email:Yup.string()
            .email('Invalid Email Address')
            .required('Email Cannot Be Left Empty'),
            phoneNumber:Yup.string()
            .matches(/^(60?\d{9,10}|01[1-9]\d{7,9})$/,'Invalid Phone Number')
            .required('Phone Number Cannot Be Left Empty')
        }),
        onSubmit: ()=>{
            if (submitAPI(booking_data)){
                navigate('/confirmation_reservation',{
                    state:{name:formik.values.name, date:booking_data.date, time:booking_data.time, guests:booking_data.guests, occasion:booking_data.occasion, locations:firstchecked}
                })
            }
        }
    })
    const getTodayDate = () =>{
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    }
    const handleChange = (e) =>{
        setIsChecked(e.target.checked)
    }
    useEffect(()=>{
        setBooking_Data(prev_data=>({...prev_data,time:'No Time Selected'}))
    },[booking_data.date])
    useEffect(()=>{
        const date = new Date(booking_data.date)
        const date_available = fetchAPI(date)
        setAvailable_times(date_available)
    },[booking_data.date])
    return(
        <div className='forms'>
            <form onSubmit={formik.handleSubmit}>
                <h1>Reservation Details</h1>
                <div className='indoor_outdoor'>
                    <div className='two_check'>
                        <input htmlFor='indoor' type='checkbox' checked={firstchecked} onChange={()=>(setFirstchecked(true))} />
                        <label id='indoor'>Indoor</label>
                    </div>
                    <div className='two_check'>
                        <input htmlFor='outdoor' type='checkbox' checked={!firstchecked} onChange={()=>(setFirstchecked(false))} />
                        <label id='outdoor'>Outdoor</label>
                    </div>
                </div>
                <label htmlFor='date'>Date</label>
                <input type="date" id="date" value={booking_data.date} min={getTodayDate()} onChange={(e)=>{setBooking_Data({...booking_data,date:e.target.value})}} />
                <label htmlFor='time'>Time</label>
                <select value={booking_data.time} id="time" onChange={(e)=>{setBooking_Data({...booking_data,time:e.target.value})}}>
                    <option value='No Time Selected' disabled>No Time Selected</option>
                    {available_times.map((each_date,index)=>{
                        return <option key={index} value={each_date}>{each_date}</option>
                    })}
                </select>
                <label htmlFor='guests'>Number of Guests</label>
                <input id="guests" type="number" min='1' max='20' placeholder="1" value={booking_data.guests} onChange={(e)=>{setBooking_Data({...booking_data,guests:e.target.value})}} />
                <label htmlFor='occasion'>Occasion</label>
                <select value={booking_data.occasion} onChange={(e)=>{setBooking_Data({...booking_data,occasion:e.target.value})}}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
                <label htmlFor='additional_requests'>Additional Requests (Optional)</label>
                <textarea id='additional_requests' onChange={(e)=>{setBooking_Data({...booking_data,requests:e.target.value})}} />
                <h1>Personal Details</h1>
                <label htmlFor='name'>Name</label>
                <input className='personal_input' type='text' id='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.name && formik.errors.name ? (
                    <div className='error'>{formik.errors.name}</div>
                ) : null}
                <label id='email_label' htmlFor='email'>Email</label>
                <input className='personal_input' type='email' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email ? (
                    <div className='error'>{formik.errors.email}</div>
                ) : null}
                <div className='check_box'>
                <input id='checkbox' type='checkbox' checked={ischecked} onChange={handleChange} />
                <label id='check_email' htmlFor='checkbox'>I Agree to Receive the Latest News and Offers From Little Lemon</label>
                </div>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <br></br>
                <div className='contact'>
                <label id='no-'>No - Required</label>
                </div>
                <input className='personal_input' type='text' id='phoneNumber' value={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className='error'>{formik.errors.phoneNumber}</div>
                ) : null}
                <div className='contact'>
                <label>We Will Only Contact You Through Whatsapp</label>
                </div>
                <div className='policy'>
                    <input id='policy' type='checkbox' required />
                    <label htmlFor='policy' id='policy_word'>*I Agree to The Little Lemon Policy</label>
                </div>
                <button disabled={booking_data.date==='' || booking_data.time==='No Time Selected'} type="submit">Make Your Reservation</button>
            </form>
        </div>
    )
}

export default BookingForm