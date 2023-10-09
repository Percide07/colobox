import { useState } from 'react';
import './BoxStyle.css';
const numberGenerator = (arr)=> {
    let randomIndex = Math.floor(Math.random()*15)
    return arr[randomIndex];
}
const Box = ({colors}) => {

const [real,setReal] = useState(numberGenerator(colors));

const changeColor = ()=> {
    setReal(numberGenerator(colors)) ;
}
    return(
        <div className="Box1" onClick={changeColor} style={{backgroundColor:real}}>
            
        </div>
    )
}
export default Box;