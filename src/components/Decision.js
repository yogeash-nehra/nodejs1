import {useState} from "react";
import SecondComponent from "./SecondComponent";

function Decision(props) {
    const [name:string,setName]=useState('Yogeash Nehra');

    function changeName() :void {
        {name==='Kim Jong Un'?
        setName("Bin Laden"):
        setName("Kim Jong Un")}
    }
    return(
        <div>
            <h1>Hello {name}</h1>
            <button onClick={changeName}>Change Name</button>
            {props.temp<20? <p>Too Cold</p>:<p>Too Hot</p>}
        </div>
    )

}

export default Decision;