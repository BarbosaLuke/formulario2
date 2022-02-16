'use strict'


const tempForm = {
    id:"2005",
    nome:"Talom"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_form')) ??[]
const setLocalStorage = (dbForm) => localStorage.setItem("db_form",JSON.stringify(dbForm))


const createForm =  (form) =>{
    const dbForm = getLocalStorage()
    dbForm.push(form)
    setLocalStorage(dbForm)
}










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
const closeBoxCadastro = () => document.getElementById('box-cadastro')
    .classList.remove('active')
