const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
// 2. A segunda deve retornar os valores do objeto como texto corrido.

// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2
//1)
const func1 = (objeto) => {
    for (let propriedade in objeto) {
        objeto[propriedade] = objeto[propriedade].toUpperCase()
    }
    console.log(objeto)
}
func1(objeto)

 2
     const func2 = (teste) => {
         const arrayDoObjeto = []
         for(let propriedade in objeto){
           arrayDoObjeto.push(objeto[propriedade])
         }
         return arrayDoObjeto.join()
         }
         console.log(func2(objeto))
 3

     const func3 = (func1, func2) => {
     for(let propriedade in objeto){
       console.log(objeto[propriedade].toUpperCase())
     }
     let resultadoFinal = func2(func1)
     return resultadoFinal
   }

   console.log(func3(func1, func2))









/////////////////////////////

// const func2 = (objeto) => {
//     let texto = null;
//     texto = objeto.nome += objeto.profissao += objeto.username += objeto.senha
//     texto =+ objeto
            
//              return texto
//              }
//              console.log(func2(objeto))








            










//  function caixaAlta(objeto) {
//      let novoObjeto = [{...objeto}]
//       novoObjeto.push(objeto)
//      for( let p of novoObjeto){
//          p.nome = p.nome.toUpperCase()
//          p.profissao = p.profissao.toUpperCase()
//          p.username = p.username.toUpperCase()
//          p.senha = p.senha.toUpperCase()
//      }
//      return novoObjeto
//  }
//  console.log(caixaAlta(objeto))

// console.log(caixaAlta(objeto))

// function caixaAlta(objeto) {
//     return {
//         nome: objeto.nome.toUpperCase(),
//         profissao: objeto.profissao.toUpperCase(),
//         username: objeto.username.toUpperCase(),
//         senha: objeto.senha.toUpperCase(),
     
     
//         }
//     }


// console.log(caixaAlta(objeto))


// function textoCorrido(objeto) {
//     return {
//         nome: objeto.nome.trim(),
//         profissao: objeto.profissao.trim(),
//         username: objeto.username.trim(),
//         senha: objeto.senha.trim(),
     
     
//         }
//     }


// console.log(textoCorrido(objeto))










// //1
// const func1 = () => {
//     for(let propriedade in objeto){
//       console.log(objeto[propriedade].toUpperCase())
//     }
//     }
//     func1(objeto)


// //2
//     const func2 = (teste) => {
//         const arrayDoObjeto = []
//         for(let propriedade in objeto){
//           arrayDoObjeto.push(objeto[propriedade])
//         }
//         return arrayDoObjeto.join()
//         }
//         console.log(func2(objeto))
// //3

//     const func3 = (func1, func2) => {
//     for(let propriedade in objeto){
//       console.log(objeto[propriedade].toUpperCase())
//     }
//     let resultadoFinal = func2(func1)
//     return resultadoFinal
//   }

//   console.log(func3(func1, func2))
