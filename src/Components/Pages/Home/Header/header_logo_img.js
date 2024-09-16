import logo from '../../../Images/logo.png';

function HeaderLogoImg(){
    return(
        <>
            <img className='margin_img' src={logo} alt='Little Lemon Logo' width='45%' onClick={()=>{window.location.reload()}} />
        </>
    )
}

export default HeaderLogoImg