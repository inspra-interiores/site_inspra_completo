var img = [
    { imagem: './../../img/quarto1.png', desc: 'Metragem: 20 m²; Imóvel: residencial; Design: romântico.' },
    { imagem: './../../img/quarto2.png', desc: 'Metragem: 20 m²; Imóvel: residencial; Design: contemporâneo.' },
    { imagem: './../../img/quarto3.png', desc: 'Metragem: 10 m²; Imóvel: residencial; Design: retrô.'},
    {imagem: './../../img/quarto4.png', desc: 'Metragem: 15 m²; Imóvel: residencial; Design: clássica.'},
    {imagem: './../../img/quarto5.png', desc:'Metragem: 10 m²; Imóvel: residencial; Design: contemporâneo.'},
    {imagem: './../../img/quarto6.png', desc: 'Metragem: 10 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/quarto7.png', desc: 'Metragem: 10 m²; Imóvel: residencial; Design: minimalista.'},
    {imagem: './../../img/quarto8.png', desc: 'Metragem: 13 m²; Imóvel: residencial; Design: retrô.'},
    {imagem: './../../img/quarto9.png', desc: 'Metragem: 9 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/quarto10.png', desc: 'Metragem: 10 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/quarto11.png', desc: 'Metragem: 20 m²; Imóvel: residencial; Design: minimalista.'},
    {imagem: './../../img/quarto12.png', desc: 'Metragem: 17 m²; Imóvel: residencial; Design: minimalista.'}
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
  
  function exibirModal(numquarto, descricao) {
    Swal.fire({
      title: ` quarto ${numquarto + 1}`,
      text: descricao,
      width: '354px',
      height: '333px',
      confirmButtonColor: '#47759F'
    });}