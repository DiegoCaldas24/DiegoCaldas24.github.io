const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')

//modal one
const modal = document.getElementById('modal');
const btnAbrir = document.getElementById('abrir-modal');
const btnCerrar = document.getElementById('cerrar-modal');
const botonAccion = document.getElementById('boton-accion');

// Función para abrir la ventana modal
one.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Función para cerrar la ventana modal
btnCerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Función para cerrar la ventana modal al hacer clic fuera de ella (opcional)
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});




//------two
const modal2 = document.getElementById('modal2');
const btnCerrar2 = document.getElementById('cerrar-modal2');
two.addEventListener('click', () => {
  modal2.style.display = 'block';
});

// Función para cerrar la ventana modal
btnCerrar2.addEventListener('click', () => {
  modal2.style.display = 'none';
});

// Función para cerrar la ventana modal al hacer clic fuera de ella (opcional)
window.addEventListener('click', (event) => {
  if (event.target === modal2) {
    modal2.style.display = 'none';
  }
});


//------three
const modal3 = document.getElementById('modal2');
const btnCerrar3 = document.getElementById('cerrar-modal3');
three.addEventListener('click', () => {
  modal3.style.display = 'block';
});

// Función para cerrar la ventana modal
btnCerrar3.addEventListener('click', () => {
  modal3.style.display = 'none';
});

// Función para cerrar la ventana modal al hacer clic fuera de ella (opcional)
window.addEventListener('click', (event) => {
  if (event.target === modal3) {
    modal3.style.display = 'none';
  }
});


//------four
const modal4 = document.getElementById('modal4');
const btnCerrar4 = document.getElementById('cerrar-modal4');
four.addEventListener('click', () => {
  modal4.style.display = 'block';
});

// Función para cerrar la ventana modal
btnCerrar4.addEventListener('click', () => {
  modal4.style.display = 'none';
});

// Función para cerrar la ventana modal al hacer clic fuera de ella (opcional)
window.addEventListener('click', (event) => {
  if (event.target === modal4) {
    modal4.style.display = 'none';
  }
});


//------five
const modal5 = document.getElementById('modal5');
const btnCerrar5 = document.getElementById('cerrar-modal5');
five.addEventListener('click', () => {
  modal5.style.display = 'block';
});

// Función para cerrar la ventana modal
btnCerrar5.addEventListener('click', () => {
  modal5.style.display = 'none';
});

// Función para cerrar la ventana modal al hacer clic fuera de ella (opcional)
window.addEventListener('click', (event) => {
  if (event.target === modal5) {
    modal5.style.display = 'none';
  }
});


//------six
const modal6 = document.getElementById('modal6');
const btnCerrar6 = document.getElementById('cerrar-modal6');
six.addEventListener('click', () => {
  modal6.style.display = 'block';
});

// Función para cerrar la ventana modal
btnCerrar6.addEventListener('click', () => {
  modal6.style.display = 'none';
});

// Función para cerrar la ventana modal al hacer clic fuera de ella (opcional)
window.addEventListener('click', (event) => {
  if (event.target === modal6) {
    modal6.style.display = 'none';
  }
});
