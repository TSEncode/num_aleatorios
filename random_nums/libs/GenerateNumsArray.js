import GenerateNums from "./GenerateNums";
export default function GenerateNumsArray(total, min, max){
    let nums = []
    for(let i = 0; i <= total; i++){
        nums.push(GenerateNums(min, max))
    }

    return nums
}
