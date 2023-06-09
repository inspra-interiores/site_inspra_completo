var img = [
    { imagem: './../../img/areaServico1.png', desc: 'Metragem: 8 m²; Imóvel: residencial; Design: contemporâneo.' },
    { imagem: './../../img/areaServico2.png', desc: 'Metragem: 6 m²; Imóvel: residencial; Design: romântico.' },
    { imagem: './../../img/areaServico3.png', desc: 'Metragem: 5 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/areaServico4.png', desc: 'Metragem: 7 m²; Imóvel: residencial; Design: minimaslista.'},
    {imagem: './../../img/areaServico5.png', desc:'Metragem: 10 m²; Imóvel: residencial; Design: contemporâneo.'},
    {imagem: './../../img/areaServico6.png', desc: 'Metragem: 4 m²; Imóvel: residencial; Design: minimalista.'},
    {imagem: './../../img/areaServico7.png', desc: 'Metragem: 7 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/areaServico8.png', desc: 'Metragem: 8 m²; Imóvel: residencial; Design: minimalista.'},
    {imagem: './../../img/areaServico9.png', desc: 'Metragem: 8 m²; Imóvel: comercial; Design: clássico.'},
    {imagem: './../../img/areaServico10.png', desc: 'Metragem: 7 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/areaServico11.png', desc: 'Metragem: 9 m²; Imóvel: residencial; Design: rústico.'},
    {imagem: './../../img/areaServico12.png', desc: 'Metragem: 8 m²; Imóvel: comercial; Design: contemporâneo.'}
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
  
  function exibirModal(numareaServico, descricao) {
    Swal.fire({
      title: ` area de Serviço ${numareaServico + 1}`,
      text: descricao,
      width: '354px',
      height: '333px',
      confirmButtonColor: '#47759F'
    });}