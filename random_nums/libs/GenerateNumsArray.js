import GenerateNums from "./GenerateNums";
export default function GenerateNumsArray(total=6, nums =[] ){
    total = +total
    if( total < 6 && total >60){
        throw "Passa o intervalo de possibilidades"
    }

    if(nums.length === total){
        return nums
    }

    let randomNum = GenerateNums(0,60)

    if(!nums.includes(randomNum)){
        return GenerateNumsArray(total, [...nums, randomNum])
    }else{
        return GenerateNumsArray(total,nums)
    }

}
