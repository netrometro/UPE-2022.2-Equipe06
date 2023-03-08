import React from "react";
// import FormUsuario from '../forms/cadastro/FormCadastro'
// import styles from '../forms/cadastro/FormCadastro.module.css'

function Pedido() {
    const list = [
    {
        id: 114,
        data: '08/03/2023',
        valor: 100,
    },
    {
        id: 452,
        data: '01/01/2021',
        valor: 200,
    },
    {
        id: 374,
        data: '08/02/2023',
        valor: 300,
    }
    ];

    return(
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',}}>
            <ul>
                {list.map(item => (
                <p key={item.id}>
                    <div>Pedido nº {item.id}</div>
                    <div>Feito em {item.data}</div>
                    <div>Valor total: R$ {item.valor}</div>
                    <br></br>
                </p>
                
                ))}
            </ul>
            </div>
            
        </div>
    )
}

// const list = [
// {
//     id: 'a',
//     firstname: 'Robin',
//     lastname: 'Wieruch',
//     year: 1988,
// },
// {
//     id: 'b',
//     firstname: 'Dave',
//     lastname: 'Davidds',
//     year: 1990,
// },
// ];

// const nestedLists = [list, list];

// const Pedido = () => (
// <ul>
//     {nestedLists.map((nestedList, index) => (
//     <ul key={index}>
//         <h4>List {index + 1}</h4>
//         {nestedList.map(item => (
//         <li key={item.id}>
//             <div>{item.id}</div>
//             <div>{item.firstname}</div>
//             <div>{item.lastname}</div>
//             <div>{item.year}</div>
//         </li>
//         ))}
//     </ul>
//     ))}
// </ul>
// );

export default Pedido