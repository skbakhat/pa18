import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Button} from 'react-bootstrap';
import './buttonStyle.css';


export default function Buttonn(props){

    return(
       
 <Button>{props.text}</Button> 
       
    )
}