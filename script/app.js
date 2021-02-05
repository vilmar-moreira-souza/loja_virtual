//https://youtu.be/wG65FdU-Yos

const itens =[
  {
    id:0,
    nome : "camiseta",
    img: src="./img/camiseta.jpg",
    quantidade : 0
  },
  {
    id:1,
    nome : "short",
    img: src="./img/short.jpg" ,
    quantidade : 0
  },
  {
    id:2,
    nome : "sapato",
    img: src="./img/sapato.jpg ",
    quantidade : 0
  }
]

 inicializarLoja = ()=> {

  var containerProdutos = document.getElementById('produtos')
  itens.map((val) => {
    console.log(val)

     containerProdutos.innerHTML+= `
    <div class="produtos-single">
    <img src="${val.img}"class="imagens" >
    <p>${val.nome}</p>
    <a key="${val.id}" href="#">adicionar ao carrinho!</a>
    </div> `;// <img src="`+val.img +`">

  })

}
inicializarLoja()
atualizarCarrinho = () =>{
  var containerCarrrinho = document.getElementById('carrinho')
  containerCarrrinho.innerHTML = ""
  itens.map((val) => {
    if (val.quantidade >0) {
      containerCarrrinho.innerHTML+=`<p class="p_quantidade">`+val.nome+`| quantidade: `+val.quantidade+`</p>
      <hr>
      `;
    }
  })
}




var links = document.getElementsByTagName('a')
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click",function () {
  let key = this.getAttribute('key')
  itens[key].quantidade++
  atualizarCarrinho()
  return false
  })
}
