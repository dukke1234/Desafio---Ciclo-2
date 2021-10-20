window.onload = function(){
 
    let frutas = [
        {descricao:'Abacate', preco:3.20},
        {descricao:'Abacaxi', preco:5.00},
        {descricao:'Banana', preco:2.20},
        {descricao:'Goiaba', preco:1.80},
        {descricao:'Laranja', preco:1.90},
        {descricao:'Limão', preco:1.00},
        {descricao:'Maçã', preco:4.80},
        {descricao:'Manga', preco:6.80},
    ]
    
    const listaProdutos = document.querySelector('#produtos');
   
    
    (()=> {
        for (let produtos of frutas ){
            const li = document.createElement('li');
            for (let listaF in produtos){
                if (listaF=='preco'){
                    listaProdutos.appendChild(li).setAttribute('data-preco',produtos[listaF]);
                }else {
                    listaProdutos.appendChild(li).textContent = `${produtos[listaF]}`;
                }
            }
        }
    })();
    
    const cestaDoCliente=document.querySelector('#cestaDoCliente');
    const totalCompra=document.querySelector('#mostraTotalCompra');
    let cestaDeFrutas=[];
    let selecionarFruta=document.querySelectorAll('#produtos>li');
    let total=0;
    
    selecionarFruta.forEach(function(item){
        item.addEventListener('click', function(){
            if(cestaDeFrutas.indexOf(item.textContent)!=-1){
                alert('Este ítem já está na sua cesta de compras');
            } else {
                total+=Number(item.dataset.preco);
                cestaDeFrutas.push(item.textContent);
                let frutaDaCesta=document.createElement('li');
                cestaDoCliente.appendChild(frutaDaCesta).textContent=item.textContent;
                totalCompra.value=total.toFixed(2);
            }
            console.log(item.textContent);
        })
    })
}
    