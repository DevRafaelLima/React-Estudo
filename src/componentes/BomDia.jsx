import React, { Fragment } from 'react'


export default props =>
    <Fragment>
        <h1>Boa noite {props.nome}</h1>
        <h2>Idade: {props.idade} anos</h2>
    </Fragment>
/*
export default props => 
    <React.Fragment>
        <h1>Boa noite {props.nome}</h1>
        <h2>Idade: {props.idade} anos</h2>
    </React.Fragment>
*/
/*export default props => 
    <div>
        <h1>Bom dia {props.nome}!</h1>
        <h2>sua idade é de </h2>
    </div>
*/

/*export default props => <h1>Bom dia {props.nome}!</h1>*/
