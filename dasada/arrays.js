const resposta1 = document.getElementById("respostaum");
const resposta2 = document.getElementById("respostados");
const resposta3 = document.getElementById("respostatres");

const soma = function (array) {
  let resultado = 0;

  for (let i = 0; i < array.length; i++) {
    resultado = resultado + array[i]
  }
  return resultado;
};
const somarimpar = function (array) {
  let resultadoa = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      resultadoa = resultadoa + array[i]
    }
    
  }return resultadoa;
}
  const vezes = function (array) {
    let resultadob;
    for (let i = 0; i < array.legth; i++) {
      resultadob *= array[i]
    }
    return resultadob
}

respostaum.innerHTML = soma([])


