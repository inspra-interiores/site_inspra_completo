var img = [
  { imagem: './../../img/sala1.png', desc: 'Metragem: 100 m²; Imóvel: residencial; Design: contemporâneo.' },
  { imagem: './../../img/sala2.png', desc: 'Metragem: 200 m²; Imóvel: comercial; Design: rústico.' },
  { imagem: './../../img/sala3.png', desc: 'Metragem: 50 m²; Imóvel: residencial; Design: industrial.'},
  {imagem: './../../img/sala4.png', desc: 'Metragem: 20 m²; Imóvel: residencial; Design: retrô.'},
  {imagem: './../../img/sala5.png', desc:'Metragem: 60 m²; Imóvel: residencial; Design: contemporâneo.'},
  {imagem: './../../img/sala6.png', desc: 'Metragem: 40 m²; Imóvel: residencial; Design: rústico.'},
  {imagem: './../../img/sala7.png', desc: 'Metragem: 70 m²; Imóvel: residencial; Design: rústico.'},
  {imagem: './../../img/sala8.png', desc: 'Metragem: 15 m²; Imóvel: residencial; Design: retrô.'},
  {imagem: './../../img/sala9.png', desc: 'Metragem: 90 m²; Imóvel: comercial; Design: contemporâneo.'},
  {imagem: './../../img/sala10.png', desc: 'Metragem: 50 m²; Imóvel: residencial; Design: clássica.'},
  {imagem: './../../img/sala11.png', desc: 'Metragem: 30 m²; Imóvel: residencial; Design: retrô.'},
  {imagem: './../../img/sala12.png', desc: 'Metragem: 50 m²; Imóvel: residencial; Design: minimalista.'}
];

for (var contador = 0; contador < 3; contador++) {
  var imagem_atual = img[contador];
  var descricao_atual = imagem_atual.desc;

  primeira.innerHTML += `
    <div id="p${contador}">
      <div id="div_mensagem"></div>
      <img style="width: 333px; height: 386px;" src="${imagem_atual.imagem}" alt="" onclick="exibirModal(${contador},'${descricao_atual}')">
    </div>`;
}

for (; contador < 6; contador++) {
  var imagem_atual = img[contador];
  var descricao_atual = imagem_atual.desc;


  segunda.innerHTML += `
    <div id="p${contador}">
      <div id="div_mensagem"></div>
      <img style="width: 333px; height: 386px;" src="${imagem_atual.imagem}" alt="" onclick="exibirModal(${contador},'${descricao_atual}')">
    </div>`;
}

for (; contador < 9; contador++) {
  var imagem_atual = img[contador];
  var descricao_atual = imagem_atual.desc;


  terceira.innerHTML += `
    <div id="p${contador}">
      <div id="div_mensagem"></div>
      <img style="width: 333px; height: 386px;" src="${imagem_atual.imagem}" alt="" onclick="exibirModal(${contador},'${descricao_atual}')">
    </div>`;
}

for (; contador < 12; contador++) {
  var imagem_atual = img[contador];
  var descricao_atual = imagem_atual.desc;


  quarta.innerHTML += `
    <div id="${contador}">
      <div id="div_mensagem"></div>
      <img style="width: 333px; height: 386px;" src="${imagem_atual.imagem}" alt="" onclick="exibirModal(${contador},'${descricao_atual}')">
    </div>`;
}

function exibirModal(numSala, descricao) {
  Swal.fire({
    title: ` sala ${numSala + 1}`,
    text: descricao,
    width: '354px',
    height: '333px',
    confirmButtonColor: '#47759F'
  });}