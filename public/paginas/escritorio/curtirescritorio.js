var img = [
    { imagem: './../../img/escritorio1.png', desc: 'Metragem: 35 m²; Imóvel: comerial; Design: minimalista.' },
    { imagem: './../../img/escritorio2.png', desc: 'Metragem: 15 m²; Imóvel: comercial; Design: contemporâneo.' },
    { imagem: './../../img/escritorio3.png', desc: 'Metragem: 100 m²; Imóvel: comercial; Design: industrial.'},
    {imagem: './../../img/escritorio4.png', desc: 'Metragem: 100 m²; Imóvel: comercial; Design: minimalista.'},
    {imagem: './../../img/escritorio5.png', desc:'Metragem: 30 m²; Imóvel: comercial; Design: romântico.'},
    {imagem: './../../img/escritorio6.png', desc: 'Metragem: 17 m²; Imóvel: comercial; Design: romântico.'},
    {imagem: './../../img/escritorio7.png', desc: 'Metragem: 15 m²; Imóvel: residencial; Design: contemporâneo.'},
    {imagem: './../../img/escritorio8.png', desc: 'Metragem: 13 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/escritorio9.png', desc: 'Metragem: 20 m²; Imóvel: comercial; Design: contemporâneo.'},
    {imagem: './../../img/escritorio10.png', desc: 'Metragem: 20 m²; Imóvel: comercial; Design: industrial.'},
    {imagem: './../../img/escritorio11.png', desc: 'Metragem: 20 m²; Imóvel: comercial; Design: industtrial.'},
    {imagem: './../../img/escritorio12.png', desc: 'Metragem: 40 m²; Imóvel: comercial; Design: clássico.'}
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
  
  function exibirModal(numescritorio, descricao) {
    Swal.fire({
      title: ` escritório ${numescritorio + 1}`,
      text: descricao,
      width: '354px',
      height: '333px',
      confirmButtonColor: '#47759F'
    });}