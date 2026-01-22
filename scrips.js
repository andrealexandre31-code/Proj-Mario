

const form = document.querySelector('.form-orcamento');
const mascara = document.querySelector('.mascara-form');
const header = document.querySelector('.fale');


function abrirFormulario() {
    document.querySelector('.mascara-form').style.display = 'block';
    form.style.left = '50%'
    form.style.transform = 'translatex(-50%)';
    mascara.style.visibility = 'visible';
}
function fecharFormulario() {
    form.style.left = '-300px';
    form.style.transform = 'translatex(0)';
    mascara.style.visibility = 'hidden';    
}
function openFormulario() {

    const header = document.querySelector('.fale');
    form.style.left = '50%'
    form.style.transform = 'translatex(-50%)';
    mascara.style.visibility = 'visible';
}
function fecharFormulario() {
    
    const header = document.querySelector('.fale');
    form.style.left = '-300px';
    form.style.transform = 'translatex(0)';
    mascara.style.visibility = 'hidden';    
}