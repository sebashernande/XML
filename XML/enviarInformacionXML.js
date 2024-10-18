function enviarFormulario() {
//capturar info del formulario
const nombre = document.getElementById("nombre").value;
const email = document.getElementById("email").value;
const anio = document.getElementById("anio").value;
const numerodetel = document.getElementById("anio").value;


const xmlData = 
`<usuario> 
<nombre>${nombre}</nombre>
<email>${email}</email>
<anio>${anio}</anio>
<numerodetel>${numerodetel}</numerodetel>
</usuario>
` 
;

localStorage.setItem('usuarioXML', xmlData)

window.location.href = 'visualizar.html';

return false
}