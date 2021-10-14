import {useState} from "react";
import Nums from "./Nums";

export default function ChooseForm(){
    const [valueButton, setValueButton] = useState(0)
    const [valueInput, setValueInput] = useState("")
    let warning = ""

    function clean(){
        setValueInput("")
        setValueButton("")
    }

    if( valueInput < 6 && valueInput > 60){
        warning = " Tem que escolher um número entre 6 e 60"
        setValueInput(6)
        setValueButton(6)
    }

    return(
        <>
            <div>
                <span>Quantos números aleatórios quer gerar?</span>
                <input type={"text"} name={"choose-total-num"} value={valueInput}  onChange={e => setValueInput(e.target.value)}/>
                <button onClick={e => setValueButton(e.target.previousElementSibling.value)}>Gerar</button>
                <button onClick={clean}>Limpar</button>
            </div>
            <div>
                <Nums total={valueButton }></Nums>
            </div>
            <div>
                <p>{warning}</p>
            </div>
        </>
    )
}