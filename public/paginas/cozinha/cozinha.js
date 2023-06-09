var img = [
    { imagem: './../../img/cozinha1.png', desc: 'Metragem: 15 m²; Imóvel: residencial; Design: industrial.' },
    { imagem: './../../img/cozinha2.png', desc: 'Metragem: 15 m²; Imóvel: residencial; Design: contemporâneo.' },
    { imagem: './../../img/cozinha3.png', desc: 'Metragem: 15 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/cozinha4.png', desc: 'Metragem: 15 m²; Imóvel: residencial; Design: minimaslista.'},
    {imagem: './../../img/cozinha5.png', desc:'Metragem: 15 m²; Imóvel: residencial; Design: contemporâneo.'},
    {imagem: './../../img/cozinha6.png', desc: 'Metragem: 20 m²; Imóvel: residencial; Design: industrial.'},
    {imagem: './../../img/cozinha7.png', desc: 'Metragem: 12 m²; Imóvel: residencial; Design: minimalista.'},
    {imagem: './../../img/cozinha8.png', desc: 'Metragem: 19 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/cozinha9.png', desc: 'Metragem: 50 m²; Imóvel: comercial; Design: rústico.'},
    {imagem: './../../img/cozinha10.png', desc: 'Metragem: 20 m²; Imóvel: residencial; Design: clássico.'},
    {imagem: './../../img/cozinha11.png', desc: 'Metragem: 15 m²; Imóvel: residencial; Design: minimalista.'},
    {imagem: './../../img/cozinha12.png', desc: 'Metragem: 15 m²; Imóvel: residencial; Design: retrô.'}
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
  
  function exibirModal(numcozinha, descricao) {
    Swal.fire({
      title: ` cozinha ${numcozinha + 1}`,
      text: descricao,
      width: '354px',
      height: '333px',
      confirmButtonColor: '#47759F'
    });}