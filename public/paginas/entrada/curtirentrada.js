var img = [
    { imagem: './../../img/entrada1.png', desc: 'Metragem: 40 m²; Imóvel: residencial; Design: rústio.' },
    { imagem: './../../img/entrada2.png', desc: 'Metragem: 35 m²; Imóvel: residencial; Design: romântico.' },
    { imagem: './../../img/entrada3.png', desc: 'Metragem: 50 m²; Imóvel: residencial; Design: minimalista.'},
    {imagem: './../../img/entrada4.png', desc: 'Metragem: 40 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/entrada5.png', desc:'Metragem: 45 m²; Imóvel: residencial; Design: industrial.'},
    {imagem: './../../img/entrada6.png', desc: 'Metragem: 28 m²; Imóvel: residencial; Design: rústico.'},
    {imagem: './../../img/entrada7.png', desc: 'Metragem: 32 m²; Imóvel: residencial; Design: industrial.'},
    {imagem: './../../img/entrada8.png', desc: 'Metragem: 30 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/entrada9.png', desc: 'Metragem: 20 m²; Imóvel: residencial; Design: contemporâneo.'},
    {imagem: './../../img/entrada10.png', desc: 'Metragem: 20 m²; Imóvel: residencial; Design: minimalista.'},
    {imagem: './../../img/entrada11.png', desc: 'Metragem: 20 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/entrada12.png', desc: 'Metragem: 26 m²; Imóvel: residencial; Design: romântico.'}
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
  
  function exibirModal(numentrada, descricao) {
    Swal.fire({
      title: ` entrada ${numentrada + 1}`,
      text: descricao,
      width: '354px',
      height: '333px',
      confirmButtonColor: '#47759F'
    });}