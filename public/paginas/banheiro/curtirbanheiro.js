var img = [
    { imagem: './../../img/banheiro1.png', desc: 'Metragem: 5 m²; Imóvel: residencial; Design: retrô.' },
    { imagem: './../../img/banheiro2.png', desc: 'Metragem: 7 m²; Imóvel: residencial; Design: romântico.' },
    { imagem: './../../img/banheiro3.png', desc: 'Metragem: 10 m²; Imóvel: residencial; Design: rústico.'},
    {imagem: './../../img/banheiro4.png', desc: 'Metragem: 7 m²; Imóvel: residencial; Design: minimaslista.'},
    {imagem: './../../img/banheiro5.png', desc:'Metragem: 10 m²; Imóvel: residencial; Design: rústico.'},
    {imagem: './../../img/banheiro6.png', desc: 'Metragem: 6 m²; Imóvel: residencial; Design: rústico.'},
    {imagem: './../../img/banheiro7.png', desc: 'Metragem: 7 m²; Imóvel: residencial; Design: rústico.'},
    {imagem: './../../img/banheiro8.png', desc: 'Metragem: 8 m²; Imóvel: residencial; Design: romântico.'},
    {imagem: './../../img/banheiro9.png', desc: 'Metragem: 8 m²; Imóvel: residencial; Design: minimalista.'},
    {imagem: './../../img/banheiro10.png', desc: 'Metragem: 7 m²; Imóvel: residencial; Design: contemporâneo.'},
    {imagem: './../../img/banheiro11.png', desc: 'Metragem: 9 m²; Imóvel: residencial; Design: industrial.'},
    {imagem: './../../img/banheiro12.png', desc: 'Metragem: 8 m²; Imóvel: residencial; Design: retrô.'}
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
  
  function exibirModal(numbanheiro, descricao) {
    Swal.fire({
      title: ` banheiro ${numbanheiro + 1}`,
      text: descricao,
      width: '354px',
      height: '333px',
      confirmButtonColor: '#47759F'
    });}