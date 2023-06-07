import YTLogo from '../images/YTLogo.png'
import notification from '../images/notification.png'
import video  from '../images/video.png'
import '../style/navbar.css'

function Navbar(){
    return(
        <div className='Navbar'>
        <div className='logo'>
        <img style={{width:"150px"}} src={YTLogo} alt=""/>
        </div>
        <div className="searchbar">
            <input type="text" placeholder="search" ></input>
        </div>
       <div className="useroptions">
       <img style={{width:"30px"}} src={video} alt=""/>
       <img style={{width:"30px"}} src={notification} alt=""/>
       <h4>H</h4>
        </div>       
        
        </div>
    )
    }
export default Navbar;