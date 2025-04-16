function inverterFrase() {
  const frase = document.getElementById('frase1').value;
  document.getElementById('resposta1').textContent = frase.split('').reverse().join('');
}

function negritarVogais() {
  const frase = document.getElementById('frase2').value;
  const resultado = frase.replace(/[aeiouáéíóúàâêôãõ]/gi, v => `<strong>${v}</strong>`);
  document.getElementById('resposta2').innerHTML = resultado;
}

function contarPalavras() {
  const texto = document.getElementById('texto3').value.toLowerCase();
  const palavras = texto.match(/\b\w+\b/g) || [];
  const contagem = {};
  palavras.forEach(p => contagem[p] = (contagem[p] || 0) + 1);
  let tabela = '<tr><th>Palavra</th><th>Ocorrências</th></tr>';
  for (const [p, c] of Object.entries(contagem)) {
    tabela += `<tr><td>${p}</td><td>${c}</td></tr>`;
  }
  document.getElementById('resposta3').innerHTML = tabela;
}

function estatisticasTexto() {
  const texto = document.getElementById('texto4').value.toLowerCase();
  const palavras = texto.match(/\b\w+\b/g) || [];
  const contagem = {};
  let maisFrequente = '', max = 0;
  palavras.forEach(p => {
    contagem[p] = (contagem[p] || 0) + 1;
    if (contagem[p] > max) {
      max = contagem[p];
      maisFrequente = p;
    }
  });
  const totalPalavras = palavras.length;
  const totalLetras = palavras.join('').length;
  document.getElementById('resposta4').innerHTML =
    `Palavra mais frequente: ${maisFrequente} (${max}x)<br>` +
    `Total de palavras: ${totalPalavras}<br>` +
    `Total de letras: ${totalLetras}`;
}

function substituirTexto() {
  const texto = document.getElementById('texto5').value;
  const procurar = document.getElementById('procurar5').value;
  const substituir = document.getElementById('substituir5').value;
  const resultado = texto.replaceAll(procurar, substituir);
  document.getElementById('resposta5').textContent = resultado;
}

function dataPorExtenso() {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
                 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const [d, m, a] = document.getElementById('data6').value.split('/');
  const extenso = `${d} de ${meses[parseInt(m) - 1]} de ${a}`;
  document.getElementById('resposta6').textContent = extenso;
}

function classificarSenha() {
  const senha = document.getElementById('senha7').value;
  const out = document.getElementById('resposta7');
  const temMinuscula = /[a-z]/.test(senha);
  const temMaiuscula = /[A-Z]/.test(senha);
  const temNumero = /\d/.test(senha);
  const temEspecial = /[@#!$%&*()\-.+=]/.test(senha);

  if (temMinuscula && temMaiuscula && temNumero && temEspecial) {
    out.textContent = 'Senha forte';
    out.className = 'forte';
  } else if (temMinuscula && temMaiuscula && temNumero) {
    out.textContent = 'Senha moderada';
    out.className = 'moderada';
  } else {
    out.textContent = 'Senha fraca';
    out.className = 'fraca';
  }
}

function codificarFrase() {
  const mapa = {
    'T': 'P', 'P': 'T', 'E': 'O', 'O': 'E',
    'N': 'L', 'L': 'N', 'I': 'A', 'A': 'I',
    'S': 'R', 'R': 'S',
    't': 'p', 'p': 't', 'e': 'o', 'o': 'e',
    'n': 'l', 'l': 'n', 'i': 'a', 'a': 'i',
    's': 'r', 'r': 's'
  };
  const frase = document.getElementById('frase8').value;
  const codificada = frase.split('').map(c => mapa[c] || c).join('');
  document.getElementById('resposta8').textContent = codificada;
}

function calcularDiasDeVida() {
  const [d, m, a] = document.getElementById('data9').value.split('/');
  const nascimento = new Date(`${a}-${m}-${d}`);
  const hoje = new Date();
  const diff = Math.floor((hoje - nascimento) / (1000 * 60 * 60 * 24));
  document.getElementById('resposta9').textContent = `${diff} dias de vida`;
}

function calcularSemanas() {
  const [d1, m1, a1] = document.getElementById('data10a').value.split('/');
  const [d2, m2, a2] = document.getElementById('data10b').value.split('/');
  const dt1 = new Date(`${a1}-${m1}-${d1}`);
  const dt2 = new Date(`${a2}-${m2}-${d2}`);
  const semanas = Math.floor(Math.abs(dt2 - dt1) / (1000 * 60 * 60 * 24 * 7));
  document.getElementById('resposta10').textContent = `${semanas} semanas`;
}
