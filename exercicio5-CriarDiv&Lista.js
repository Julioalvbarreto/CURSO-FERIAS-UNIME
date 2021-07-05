    var criarTitulo = document.createElement("h1")
        criarTitulo.innerHTML = "Lista de nomes em um Array"
        document.querySelector("body").appendChild(criarTitulo)
        
    var testeArray=["Maria", "João", "Julio", "Jose"]

    function criarlista(array,string){
        var criarDiv = document.createElement("div")
            document.querySelector("body").appendChild(criarDiv).id=(string)
                for(var i=0;i<array.length;i++){
                    var criarUl = document.createElement("ul")
                        document.querySelector("div").appendChild(criarUl)
                    var criarLi = document.createElement("li")
                        document.querySelector("ul").appendChild(criarLi)
                        criarLi.innerHTML= testeArray[i]
                    }
}

    criarlista(testeArray,"testeID")
