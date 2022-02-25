'use strict'






const tempForm = {
    id:"2005",
    nome:"LeBlanc"
}

//Banco De dados
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_form')) ??[]
const setLocalStorage = (dbForm) => localStorage.setItem("db_form",JSON.stringify(dbForm))


//Delete
const deleteForm = (index) =>{
    const dbForm = readForm()
    dbForm.splice(index,1)
    setLocalStorage(dbForm)
}

//Update
const UpdateForm = (index,form) =>{
    const dbForm = readForm()
    dbForm[index] = form
    setLocalStorage(dbForm) 
}
//Read
const readForm = () => getLocalStorage()

//CREATE
const createForm =  (form) =>{
    const dbForm = getLocalStorage()
    dbForm.push(form)
    setLocalStorage(dbForm)
}
const isValidFields = () =>{
   return document.getElementById('cadastro-form').reportValidity()
}


//Interação com layout

const clearFields = () =>{
    const fields = document.querySelectorAll('.box-field-cadastro')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

const saveForm = () => {
    if (isValidFields()){
        
        const form = {
            nome: document.getElementById('nome').value,
            CPF: document.getElementById('CPF').value,
            nomeDaMae: document.getElementById('nomeDaMae').value,
            nomeDoPai: document.getElementById('nomeDoPai').value,
            corPreferida: document.getElementById('corPreferida').value,
            dataNascimento: document.getElementById('dataNascimento').value,
            email: document.getElementById('email').value
        }
        const index = document.getElementById('nome').dataset.index
        if(index == 'new'){
            createForm(form)
            updateTable()
            clearFields()
            closeBoxCadastro()
        }else {
            UpdateForm(index, form)
            updateTable()
            closeBoxCadastro()
        }
        
    }

}

const CreateRow = (form,index) =>{
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td id="ID" class="id">${index+1}</td>
        <td class="nome">${form.nome}</td>
        <td class="rowbutton">
            <button onclick="openBoxShow()" id="show-${index}" class="button azul" type="button">
                Show
            </button>
            <button  id="edit-${index}" class="button amarelo"  type="button">
                Editar
            </button>
            <button onclick="" id="delete-${index}" class="button vermelho" type="button">
                Excluir
            </button>
        </td>
    `
    document.querySelector('#tableForm>tbody').appendChild(newRow)
    if (index % 2 == 0) {
        document
    }
}

   





const  clearTable = () =>{
    const rows = document.querySelectorAll('#tableForm>tbody tr')
    rows.forEach(row =>row.parentNode.removeChild(row))
}


const updateTable = () =>{
    const dbForm = readForm()
    clearTable()
    dbForm.forEach(CreateRow)
}


const fillFieldsB = (form) =>{ 
    document.getElementById('nomeee').value = form.nome 
    document.getElementById('CPFFF').value = form.CPF
    document.getElementById('nomeDaMaeee').value = form.nomeDaMae
    document.getElementById('nomeDoPaiii').value = form.nomeDoPai
    document.getElementById('corPreferidaaa').value = form.corPreferida 
    document.getElementById('dataNascimentooo').value = form.dataNascimento 
    document.getElementById('emailll').value = form.email 
    document.getElementById('nomeee').dataset.index = form.index 
}



const fillFields = (form) =>{ 
        document.getElementById('nome').value = form.nome 
        document.getElementById('CPF').value = form.CPF
        document.getElementById('nomeDaMae').value = form.nomeDaMae
        document.getElementById('nomeDoPai').value = form.nomeDoPai
        document.getElementById('corPreferida').value = form.corPreferida 
        document.getElementById('dataNascimento').value = form.dataNascimento 
        document.getElementById('email').value = form.email 
        document.getElementById('nome').dataset.index = form.index 
}

const editForm = (index) => { 
    const form = readForm()[index] 
    form.index = index 
    fillFields(form)
    fillFieldsB(form)  
    openBoxCadastro() 
}

const showForm = (index) =>{
    const form = readForm()[index]
    form.index = index 
    fillFields(form)
    fillFieldsB(form)  
    openBoxShow()
}

const editDelete = (event) =>{ 
    if (event.target.type == 'button'){ 
        const [action, index] = event.target.id.split('-') 
        if (action == 'edit'){ 
            editForm(index) 
        }
        else if(action == 'show'){
            showForm(index)
        }else { 
            const form = readForm()[index] 
            const response = confirm (`Deseja realmente excluir? ${form.nome}`) 
            if (response){ 
                deleteForm(index) 
                updateTable() 
            }
        }
    }

}

updateTable()

//ABRIR E FECHAR A BOXEDIT
const openBoxEdit = () => document.getElementById('box-edit')
    .classList.add('active')
const closeBoxEdit = () => document.getElementById('box-edit')
    .classList.remove('active')


//ABRIR E FECHAR A BOXSHOW   
const openBoxShow = () =>{ document.getElementById('box-show').classList.add('active')
}
const closeBoxShow = () => document.getElementById('box-show')
    .classList.remove('active')



//ABRIR E FECHAR A BOXCADASTRO   
const openBoxCadastro = () => document.getElementById('box-cadastro')
    .classList.add('active')
const closeBoxCadastro = () => {document.getElementById('box-cadastro')
    .classList.remove('active')
    clearFields()
}

document.querySelector('#tableForm>tbody')
    .addEventListener('click', editDelete)

document.getElementById('salvarr') 
    .addEventListener('click',saveForm)

const pintado = () =>{
    document.querySelector('tr').appendChild(newRow).style.backgroundColor = 'green'; 
}