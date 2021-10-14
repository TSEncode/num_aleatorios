import {useState} from "react";
import GenerateNumsArray from "../libs/GenerateNumsArray";

export default  function Nums(props){

    let renderNums = []

    const [state, setState] = useState(GenerateNumsArray())

    function alterNums(){
        setState(GenerateNumsArray(props.total))
    }

    for(let i = 0; i <= state.length; i++){
        renderNums.push(
            <p key={i}>
                {state[i]}
            </p>)
    }


    return(
        <>
            <div>
                {renderNums}
            </div>
            <div>
                <button onClick={alterNums}>Gerar Números</button>
            </div>
        </>

    )


}