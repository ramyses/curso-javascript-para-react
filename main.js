import './src/styles/generic/generic.css'
import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'

import CardGame from "./src/components/CardGame"
import printOnScreen6Times from './src/components/CardGame'

const $root = document.querySelector("#root")
const $htmlCardGame = CardGame()
function setRepetPrint(){
    for(let i = 0; i < 6; i++ ){
        $root.insertAdjacentHTML("beforeend", CardGame())
    }
}

setRepetPrint()


//desafio 1
//  6 * card alura
//compónente player
//todos os cards que faltam
//fazer a carta virar
