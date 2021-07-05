var funcionarios = [
    {
    nome:'João', 
    sexo:'Masculino',
    cursos:'Odontologia',
    titulo: 'Bacharelado',
    faculdade:{nome: 'Unime', endereco:'Lauro de Freitas', ano: 2008,},
    
},
{
    nome:'Maria', 
    sexo:'Feminino',
    cursos:'Engenharia da computação',
    titulo: 'Pós',
    faculdade:{nome: 'Inatel', endereco:'Minas Gerais', ano: 2005,},
    
},
{
    nome:'Vanessa', 
    sexo:'Feminino',
    cursos: false,
    titulo: '',
    faculdade:{nome: '', endereco:'', ano: "",},
    
}
]

   funcionarios.forEach(funcionario => {
        if(funcionario.cursos){
            console.log(funcionario.nome,'fez os cursos:',funcionario.cursos,'na Faculdade:', funcionario.faculdade.nome,', No ano:', funcionario.faculdade.ano )
        }
   })
