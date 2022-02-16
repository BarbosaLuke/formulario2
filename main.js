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
        createForm(form)
        clearFields()
        closeBoxCadastro()
    }

}

const CreateRow = (form,index) =>{
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td class="id">${index+1}</td>
        <td class="nome">${form.nome}</td>
        <td class="rowbutton">
            <button onclick="openBoxShow()" id="show" class="button azul" type="button">
                Show
            </button>
            <button onclick="openBoxEdit()" id="edit" class="button amarelo" type="button">
                Editar
            </button>
            <button onclick="" class="button vermelho" type="button">
                Excluir
            </button>
        </td>
    `
    document.querySelector('#tableForm>tbody').appendChild(newRow)
}

const updateTable = () =>{
    const dbForm = readForm()
    dbForm.forEach(CreateRow)
}

updateTable()

//ABRIR E FECHAR A BOXEDIT
const openBoxEdit = () => document.getElementById('box-edit')
    .classList.add('active')
const closeBoxEdit = () => document.getElementById('box-edit')
    .classList.remove('active')


//ABRIR E FECHAR A BOXSHOW   
const openBoxShow = () => document.getElementById('box-show')
    .classList.add('active')
const closeBoxShow = () => document.getElementById('box-show')
    .classList.remove('active')


//ABRIR E FECHAR A BOXCADASTRO   
const openBoxCadastro = () => document.getElementById('box-cadastro')
    .classList.add('active')
const closeBoxCadastro = () => {document.getElementById('box-cadastro')
    .classList.remove('active')
    clearFields()
}