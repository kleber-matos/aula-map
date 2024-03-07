/** @format */

import React, { useState } from "react";
import { styled } from "styled-components";

export default function Card() {
  //Oque e um array? Array são estrutura de dados

  //Map e um metodo javascript
  // const numeros = [1, 2, 3, 4, 5];
  // const numerosDobrados = numeros.map((numero) => numero * 2);
  // console.log(numerosDobrados); // Saída: [2, 4, 6, 8, 10]

  //   const tarefas = [
  //     "Aprender React",
  //     "Estudar styled-components",
  //     "Construir um app",
  //   ];

  //   const alunos = ["maria", "joao", "lucas"];

  // const Card = styled.div`
  //   border: solid 3px green;
  //   width: 10vw;
  //   height: 35vh;
  //   margin: 2rem;

  //   img {
  //     width: 100%;
  //   }
  // `;

  // const cadastro = [
  //   {
  //     img: "https://media.licdn.com/dms/image/D4E03AQEKj6RYQKuo8Q/profile-displayphoto-shrink_400_400/0/1675982195732?e=1715212800&v=beta&t=1Vh8C665NxQtbLqLrGePPDi0YkSmjs_K73YYTDV3zmQ",
  //     nome: "maria",
  //     idade: 32,
  //   },
  //   {
  //     img: "https://avatars.githubusercontent.com/${buscar}",
  //     nome: "joao",
  //     idade: 25,
  //   },
  //   {
  //     img: "https://avatars.githubusercontent.com/kleber-matos",
  //     nome: "ana",
  //     idade: 18,
  //   },
  // ];

  return (
    <div>
      <h1>Map</h1>
      {/* <ul>
        {tarefas.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul> */}
      {/* <div>
        {alunos.map((nome) => (
          <p>{nome}</p>
        ))}
      </div> */}
      {/* <div>
        {cadastro.map((pessoa) => (
          <Card>
            <img src={pessoa.img} alt="img" />
            <h3>Nome: {pessoa.nome}</h3>
            <p>Idade: {pessoa.idade}</p>
          </Card>
        ))}
      </div> */}
    </div>
  );
}
