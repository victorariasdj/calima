const negocios = [
    {
        nombre: "Drogueria Don Victor",
        imagen: "./drogueria-don-victor/drogueria.jpg",
        descripcion: "Drogueria y Tienda Naturista, Recargas, Servicio de Inyectologia",
        ubicacion: "Cra 7 # 11-12",
        telefono: "3155178654 - 3173805598",
        pagWeb: "https://buscadorcalima.com/drogueria-don-victor/drogueria-don-victor.html",
        keywords: "drogueria, tienda naturista, inyectologia, medicamento, suero, recargas, ",
        rutaInterna: "./drogueria-don-victor/drogueria-don-victor.html",
        correo: ""
    },
    {
        nombre: "Yogurt Feel",
        imagen: "./img/yogurt-feel.jpeg",
        descripcion: "Delicioso Yogurt de Uva y Fresa<br> También Yogurt Griego",
        ubicacion: "Calima Darien",
        telefono: "3153730917",
        pagWeb: "",
        keywords: "yogurt, yogurt griego, uva, fresa",
        rutaInterna: "",
        correo: ""
    },

    {
        nombre: "Smaz Papelería y Miscelánea",
        imagen: "./img/smaz-papeleria.jpeg",
        descripcion: "Ven y conoce una forma diferente tierna y divertida en papelería, manejamos servicios de: fotocopias blanco y negro o a color, impresión láser, papelería general y papelería kawaii, miscelánea entre otros. Se vale antojarse!",
        ubicacion: "Carrera 11 # 10-54 B/San Vicente",
        telefono: "3187044288",
        pagWeb: "https://www.instagram.com/smazpapelaz_/",
        keywords: "papelería, kawaii, impresiones, cuadernos, libros, marcadores, fotocopias, cartulina, lapiceros, cartucheras, colores, lienzos vinilos, resmas papel, agendas, loncheras, notas adhesivas, impresión laser",
        rutaInterna: "",
        correo: "smazpapelaz2022@gmail.com"
    },

    {
        nombre: "Victor Arias",
        imagen: "./img/victor-arias.jpg",
        descripcion: "Dj de música electrónica, técnico de computadores, desarrollador web, mezcla y master de audio, clases personalizadas de producción musical.",
        ubicacion: "Colombia",
        telefono: "3163251628",
        pagWeb: "https://victorarias.eth.limo/",
        keywords: "dj, música electrónica,matenimiento, técnico de computadores, desarrollador web, mezcla, master, audio, clases personalizadas, producción musical.",
        rutaInterna: "",
        correo: "djvictor_arias@hotmail.com"
    },

    {
        nombre: "Ferretería Medellín",
        imagen: "./img/ferreteria-medellin.jpeg",
        descripcion: "Venta de materiales para construcción, servicio a domicilio, pintura, eternit, pvc, lijas, cemento, estuco, alquiler de andamios, productos de aseo, etc...",
        ubicacion: "Carrera 7 # 11-49 B/Centro",
        telefono: "3154068031",
        pagWeb: "",
        keywords: "construccion, pintura, eternit, pvc, lija, cemento, estuco, andamios, aseo, electrico.",
        rutaInterna: "",
        correo: "evergiraldo1@hotmail.com"
    },
    
];

const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");
const categoriaButtons = document.querySelectorAll(".categoria-btn");
const cajaFormulario = document.querySelector(".contenedor")

const filter = () => {
    resultado.innerHTML = "";
    const texto = formulario.value.toLowerCase();
    const palabrasClave = texto.split(",").map(keyword => keyword.trim());

    if (texto === "") {
        return;
    }

    for (let negocio of negocios) {
        let nombre = negocio.nombre.toLowerCase();
        let ubicacion = negocio.ubicacion.toLowerCase();
        let keywords = negocio.keywords.toLowerCase();
        

        let encontrado = false;
        for (let palabra of palabrasClave) {            
            if (nombre.includes(palabra) || ubicacion.includes(palabra) || keywords.includes(palabra)) {
                encontrado = true;
                break;
            }
        }


        if (encontrado) {
            resultado.innerHTML += `
                
            <div class="caja-negocio">
                <div class="tituloYDescripcion">                
                <a href=${negocio.rutaInterna}><h2>${negocio.nombre}</h2>
                <div class="contendorImagen">
                <img src="${negocio.imagen}" alt="piano" class="imagenNegocio">
                </div></a>
                <p id="descripcion">${negocio.descripcion}</p>
                <h4><strong>Teléfono:</strong> ${negocio.telefono}</h4>
                <h4><strong>Ubicación:</strong> ${negocio.ubicacion}</h4>
                <h4><strong>Correo:</strong> ${negocio.correo}</h4>
                <p><strong>Pagina Web:<a href=${negocio.pagWeb}>${negocio.pagWeb}</strong></p></a>
                </div>
            </div>`;
        }
    }
    if (resultado.innerHTML === "") {
        resultado.innerHTML += `<h3>Negocio no encontrado...</h3>`;
    }
   
};

categoriaButtons.forEach(button => {
    button.addEventListener("click", () => {
        const categoria = button.getAttribute("data-categoria");
        formulario.value = categoria;
        filter();
    });
});

const limpiarInput = () => {
    cajaFormulario.reset();
    resultado.innerHTML = "";
    formulario.focus();
}



boton.addEventListener("click", limpiarInput);
formulario.addEventListener("keyup", filter);
formulario.addEventListener("input", filter);

const btnArriba = document.querySelector("#btn-arriba");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnArriba.classList.add("show");
    } else {
        btnArriba.classList.remove("show");
    }
});

btnArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// CONFIGURACION NAVBAR RESPONSIVE

let container__ul = document.querySelector('#container__ul');
let fa_bars = document.querySelector('#fa_bars');
let fa_xmark = document.querySelector('#fa_xmark');

    fa_bars.addEventListener ('click', function() {
        container__ul.classList.toggle ("container__ul-toggle");

    })

    fa_bars.addEventListener ('click', function() {
        fa_bars.style.display = "none"
        fa_xmark.style.display = "block";
    })

    fa_xmark.addEventListener ('click', function() {
        container__ul.classList.toggle ("container__ul-toggle");

    })

    fa_xmark.addEventListener ('click', function() {
        fa_bars.style.display = "flex"
        fa_xmark.style.display = "none";
    })

        



    // fa_xmark.addEventListener ('click', function() {
    //     container__ul.classList.toggle ("#fa_bars")
    // })