window.onload=function(){
    function resultadoCep(dadosCep){
        for(let campo in dadosCep){
            if(document.querySelector(`#${campo}`)){
                document.querySelector(`#${campo}`).value=dadosCep[campo];
            }
        }
    }
    let dadosCep=async function(cep){
        let url=`https://viacep.com.br/ws/${cep}/json/`;
        try{
            let dadosFetch=await fetch(url);
            console.log(dadosFetch.status)
            console.log(dadosFetch.error)
            let dadosJson=await dadosFetch.json();
            resultadoCep(dadosJson);
        } catch(error){
            alert(error);
        }
    }
    const btnBuscar=document.querySelector(`#buscar`);
    const CEP=document.querySelector(`#cep`);
    btnBuscar.addEventListener('click', function(){
    dadosCep(CEP.value);
    })
}