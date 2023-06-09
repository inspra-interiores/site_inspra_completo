var img = [
    { imagem: './../../img/areaExtena1.png', desc: 'Metragem: 3 m²; Imóvel: residencial; Design: rústico.' },
    { imagem: './../../img/areaExtena2.png', desc: 'Metragem: 13 m²; Imóvel: residencial; Design: minimalista.' },
    { imagem: './../../img/areaExtena3.png', desc: 'Metragem: 5 m²; Imóvel: residencial; Design: clássico.'},
    {imagem: './../../img/areaExtena4.png', desc: 'Metragem: 7 m²; Imóvel: residencial; Design: contemporâneo.'},
    {imagem: './../../img/areaExtena5.png', desc:'Metragem: 7 m²; Imóvel: residencial; Design: rústico.'},
    {imagem: './../../img/areaExtena6.png', desc: 'Metragem: 7 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/areaExtena7.png', desc: 'Metragem: 10 m²; Imóvel: residencial; Design: rústico.'},
    {imagem: './../../img/areaExtena8.png', desc: 'Metragem: 18 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/areaExtena9.png', desc: 'Metragem: 12 m²; Imóvel: residencial; Design: minimalista.'},
    {imagem: './../../img/areaExtena10.png', desc: 'Metragem: 15 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/areaExtena11.png', desc: 'Metragem: 10 m²; Imóvel: residencial; Design: rústico.'},
    {imagem: './../../img/areaExtena12.png', desc: 'Metragem: 10 m²; Imóvel: residencial; Design: contemporâneo.'}
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
  
  function exibirModal(numareaExtena, descricao) {
    Swal.fire({
      title: ` area Externa ${numareaExtena + 1}`,
      text: descricao,
      width: '354px',
      height: '333px',
      confirmButtonColor: '#47759F'
    });}