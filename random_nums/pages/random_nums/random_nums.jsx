import GenerateNums from "../../libs/GenerateNums";
import Nums from "../../components/Nums";

export default function random_nums(){

    return (
        <>
            <Nums total={8} min={0} max={60} ></Nums>
        </>
    )
}