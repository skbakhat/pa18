

import './cardd.css';

export default function Cardd(props){

    return(
    <>
    <div className="aligning">
       <h5>{props.head}</h5>
       <p>{props.content}</p>
       </div> 
 {/* <Button>{props.text}</Button>  */}
       </>
    )
}