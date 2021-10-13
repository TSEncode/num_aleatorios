import GenerateNums from "../libs/GenerateNums";
import {useState} from "react";
import GenerateNumsArray from "../libs/GenerateNumsArray";

export default  function Nums(props){
    let nums = GenerateNumsArray(props.total,props.min, props.max)
    let renderNums = []

    const [state, setState] = useState(nums)

    function alterNums(){
        setState(GenerateNumsArray(props.total, props.min, props.max))
    }

    for(let i = 0; i <= nums.length; i++){
        renderNums.push(
            <p key={i}>
                {nums[i]}
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