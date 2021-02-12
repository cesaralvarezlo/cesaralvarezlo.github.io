const categorias = document.querySelectorAll('#categorias-wrap .categoria-item');
const contenedorPreguntas = document.querySelectorAll('.preguntas-wrap');
let categoriaActiva = null;

//categorias
categorias.forEach((categoria) => {
    categoria.addEventListener('click', (e) => {

        categorias.forEach((elemento) => {
            elemento.classList.remove('activa');
        });

        e.currentTarget.classList.toggle('activa');
        categoriaActiva = categoria.dataset.categoria;

        //activamos el contenedor que corresponde
        contenedorPreguntas.forEach((contenedor) => {
            if(contenedor.dataset.categoria === categoriaActiva){
                contenedor.classList.add('activo');
            }else{
                contenedor.classList.remove('activo');
            }
        });

    });
});

//preguntas frecuentes
const preguntas = document.querySelectorAll('.preguntas-box .preguntas-item');

preguntas.forEach((pregunta) => {
    pregunta.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('activa');

        const respuesta = pregunta.querySelector('.respuesta');
        const alturaRealRespuesta = respuesta.scrollHeight;

        if(!respuesta.style.maxHeight){
            respuesta.style.maxHeight = alturaRealRespuesta + 'px';
        }else{
            respuesta.style.maxHeight = null;
        }

        //colapsar elemento al desplegar otro elemento
        preguntas.forEach((elemento) => {

            if(pregunta !== elemento){
                elemento.classList.remove('activa');
                elemento.querySelector('.respuesta').style.maxHeight = null;
            }
            
        });
       
    });
});