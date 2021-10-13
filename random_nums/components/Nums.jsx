import GenerateNums from "../libs/GenerateNums";

export default  function Nums(props){
    let nums = []
    let renderNums = []
    for(let i = 0; i <= props.total; i++){
       nums.push(GenerateNums(props.min,props.max))
    }

    for(let i = 0; i <= nums.length; i++){
        renderNums.push(
            <p key={i}>
                {nums[i]}
            </p>)
    }

    return(
        <div>
            {renderNums}
        </div>
    )


}