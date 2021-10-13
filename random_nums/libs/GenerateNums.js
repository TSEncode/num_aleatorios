export default  function GenerateNums (min,max){
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.abs(Math.round(Math.random() * (min-max) + min))
}

