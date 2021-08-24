


 import './footerStyle.css';
import down from '../../assets/down.png'

function Footer(){
    return(
       <div className="footerMain">
       <div className="footerMain1">
       <div className="footer1">
       <div className="footerMini">
           <h6 className="items"><a href="">Improve this page </a></h6>
           <div className="linee items"></div>
           <h6 className="items"><a href=""> Report a problem </a></h6>
           </div>
           <div>
           <img src={down} alt="Logo" />
           <p style={{width:"50%", color:"white"}}>The content driving this site is licensed under the Creative Commons 
            Attribution-ShareAlike 4.0 license.</p>
           </div>
           </div>
           

           <div className="footer2">
               <div className="linee2"></div>
               <h6>Resources</h6>
              <div className="linkss">
                   <a>Downloads</a>
                   <a>Blog</a>
                   <a>Documentation</a>
                   <a>Plugins</a>
                   <a>Security</a>
                   <a>Contributing</a>
                   </div>
              
           </div>

           <div className="footer2">
               <div className="linee2"></div>
               <h6>Projects</h6>
              <div className="linkss">
                   <a>Structure and governance</a>
                   <a>Issue tracker</a>
                   <a>Roadmap</a>
                   <a>GitHub</a>
                   <a>Jenkins on</a>
                   <a>Jenkins</a>
                   </div>
               
           </div>

           <div className="footer2">
               <div className="linee2"></div>
               <h6>Community</h6>
              <div className="linkss">
                   <a>Events</a>
                   <a>Mailing lists</a>
                   <a>Chats</a>
                   <a>Special</a>
                   <a>Interest</a>
                   <a>Groups</a>
                   <a>Twitter</a>
                   <a>Reddit</a>
                   </div>
           </div>

           <div className="footer2">
               <div className="linee2"></div>
               <h6>Other</h6>
              <div className="linkss">
                   <a>Code of conduct</a>
                   <a>Press</a>
                   <a>Information</a>
                   <a>Merchanidise</a>
                   <a>Atwork</a>
                   <a>Awards</a>
                   </div>
           </div>
           </div>
       </div>
    )
}
export default Footer;