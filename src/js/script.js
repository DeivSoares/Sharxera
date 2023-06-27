const documento = window.document;
function carrega() {
    const sect = document.querySelector("section")
    const paragraph = document.createElement("p")
    paragraph.classList.add("paragraph")
    const desc = document.createTextNode("Salve galera meu nome é Rodolfo tenho 28 anos sou do Rio de Janeiro. Minha missão aqui é trazer comédia junto com gameplay claro tudo dosado na medida do possível. Amo PXG fui do Svke mas curto também Lol, Dota, Overwatch, GLA e sempre que eu puder irei ajudar com dicas e com algumas piadas tmj.")

    sect.appendChild(paragraph)
    paragraph.appendChild(desc)

}
document.addEventListener("DOMContentLoaded", carrega())