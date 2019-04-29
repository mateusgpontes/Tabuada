function query (tag){
    return document.querySelector(tag);
}

function create (tag){
    return document.createElement(tag);
}

const lista = query('#lista');
const tabuada = query('#tabuada');
const gerar = query('#geraTabuada');

gerar.onclick = () =>{
    const h1 = create('h1');
    lista.appendChild(h1);
    h1.innerText = "Tabuada do " + tabuada.value;
    for(let i = 1; i <= 10; i++){
        const p = create('p');
        let contador = i;
        let resultado = tabuada.value * contador;
        lista.appendChild(p);
        p.innerText = contador + "x" + tabuada.value + "="+ resultado;
    }

    tabuada.value = "";
}
