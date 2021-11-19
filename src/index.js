import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
//import Mult, { BoaNoite } from './componentes/Multi'
//import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
ReactDOM.render(
<div>
<Pai nome="Rafael" sobrenome="Lima">
    <Filho nome="filho1" sobrenome="Lima"/>
    <Filho nome="filho2" sobrenome="Lima"></Filho>
    <Filho nome="Filho3" sobrenome="Lima"></Filho>
</Pai>
</div>
, document.getElementById('root'))