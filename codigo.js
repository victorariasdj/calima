const negocios = [
    {
        nombre: "Ancell Mobile Shop",
        imagen: "./img/ancell.jpeg",
        descripcion: "<b>Reparación, servicio técnico, celulares,</b> vidrio protector, cargadores, carcasas, pantallas,  display, cables, audífonos, papel craft, , artesanías,  fotocopias, impresiones, papelería, cerámica.",
        ubicacion: "Calle 7 # 8-04 b/Obrero diagonal a la escuela María Inmaculada.",
        telefono: "3182732827",
        pagWeb: "https://www.facebook.com/profile.php?id=100083593561734",
        keywords: "reparacion, servicio tecnico, celulares, vidrio protector, cargadores, carcasas, pantallas,  display, cables, audifonos, papel craft, , artesanias,  fotocopias, impresiones, papeleria, ceramica",
        rutaInterna: "https://www.facebook.com/profile.php?id=100083593561734",
        correo: "ancellmobileshop@gmail.com"
    },
    
    {
        nombre: "Cholados Miluki",
        imagen: "./img/choladosmiluki.jpeg",
        descripcion: "Cholados Frutales, Raspados, Luladas, Maracuyadas, Obleas Frutales, Guanábanazo, Fresas con Crema, Smoothies (Batidos Frutales), Sándwiches, Wafles.",
        ubicacion: "Calle 9 # 6-35",
        telefono: "3158855846",
        pagWeb: "https://instagram.com/cholados_miluki?igshid=MzMyNGUyNmU2YQ==",
        keywords: "comestibles, heladeria,  frutas, batidos, helado, bebidas, frio cholado frutales, raspados, lulo, luladas, maracuyadas, obleas frutales, guanabanazo, fresas con crema, smoothies, batidos frutales, sandwiches, wafles",
        rutaInterna: "https://instagram.com/cholados_miluki?igshid=MzMyNGUyNmU2YQ==",
        correo: ""
    },
    
    {
        nombre: "Droguería Don Victor",
        imagen: "./drogueria-don-victor/drogueria.jpg",
        descripcion: "Droguería y Tienda Naturista, Servicio de Baloto Pago de Facturas, Giros y Recargas, Servicio de Inyectología",
        ubicacion: "Cra 7 # 11-12",
        telefono: "3155178654 - 3173805598",
        pagWeb: "https://buscadorcalima.com/drogueria-don-victor/drogueria-don-victor.html",
        keywords: "salud, drogueria, tienda naturista, inyectologia, medicamento, suero, recargas, Baloto, Pago, Facturas, giros",
        rutaInterna: "./drogueria-don-victor/drogueria-don-victor.html",
        correo: ""
    },

    {
        nombre: "La Colmena",
        imagen: "./img/lacolmena.jpeg",
        descripcion: "En La Colmena, cosechamos la belleza de la naturaleza para brindarte salud y bienestar con productos naturales. Productos para la Salud y Belleza, también Papelería",
        ubicacion: "Calle 11 # 8-15",
        telefono: "3165651241",
        pagWeb: "",
        keywords: "salud, belleza, estetica facial y corporal, papeleria",
        rutaInterna: "",
        correo: ""
    },

    {
        nombre: "Encanto Calima",
        imagen: "./img/encanto-calima-sala-de-estar.png",
        descripcion: "<b>6 huéspedes, 3 habitaciones, 4 camas, 2 baños.</b><br><br>Encanto Calima es una casa familiar ubicada en una zona residencial tranquila, a 5 cuadras de la zona centro del municipio. Cuenta con una distribución y espacios cómodos divididos en tres habitaciones, con dos baños, cocina, comedor, sala, espacio de lavado y wi fi. Además cuenta con un espacio para parquear al frente de la casa.",
        ubicacion: "Barrio Guayacanes I",
        telefono: "3184000744",
        pagWeb: "https://buscadorcalima.com/encanto-calima/encanto-calima.html",
        keywords: "hotel, alquiler, estadia, hospedaje, hostal, hosteria, albergue, posada, alojamiento, alquiler por noche, estancia",
        rutaInterna: "./encanto-calima/encanto-calima.html",
        correo: "gladysmenesesm@hotmail.com"
    },

    {
        nombre: "native english conversation",
        imagen: "./img/nativeenglish.jpeg",
        descripcion: "<b>Personalized Tutorials</b><br><br>* Phonetics<br>* Practical Skills",
        ubicacion: "At your place",
        telefono: "3112852217",
        pagWeb: "",
        keywords: " clases ingles, cursos, clases particulares. profesores privados, magistrales",
        rutaInterna: "",
        correo: "jrmg3103@hotmail.com"
    },

    {
        nombre: "GPS SENTINEL",
        imagen: "./img/gpssentinel.jpeg",
        descripcion: "<b>GPS SENTINEL YA EN CALIMA EL DARIÉN. Protege tu carro o moto por tan solo $380.000 anuales.</b><br><br> Ubicación monitoreo y emergencias 24/7 de tu vehículo. Aplicación dinámica para fácil manejo. Grupo de apoyo y acompañamiento en caso de emergencia.    Apagado remoto de motor.        Historial de recorridos y operación hasta por 1 mes. Descuentos en talleres aliados, tecnomecánica, aceites y lavado vehicular.     GPS con batería de respaldo por hasta 6 horas. Notificaciones de encendido, apagado, exceso de velocidad. Geo-cercas. Muy pronto tendremos vigilancia para el hogar.",
        ubicacion: "Darién",
        telefono: "3169933227",
        pagWeb: "https://www.facebook.com/profile.php?id=61552769812180",
        keywords: "Seguridad, gps, vigilancia",
        rutaInterna: "https://www.facebook.com/profile.php?id=61552769812180",
        correo: ""
    },

    {
        nombre: "Omar Burgos Chuletas y Almuerzos",
        imagen: "./img/chuleta.jpg",
        descripcion: "Se hacen chuletas y almuerzos por encargo.",
        ubicacion: "Calle 12 # 5-35 san jorge",
        telefono: "3187662037 - 3165537811",
        pagWeb: "",
        keywords: "chuleta, almuerzo, comestible",
        rutaInterna: "",
        correo: "mariaosorio2053@gmail.com	"
    },

    {
        nombre: "Mari's Pizza",
        imagen: "./img/marispizza.jpeg",
        descripcion: "Pizza, hamburguesa, perros, sandwich, lasaña, salchipapa, jugos naturales, micheladas, servicio a domicilio",
        ubicacion: "Ciudadela German Mejia, Calle Principal Frente al Coliseo.",
        telefono: "3145018504",
        pagWeb: "",
        keywords: "comestible, restaurante, pizza, hamburguesa, perros, sandwich, lasaña, salchipapa, jugos naturales, micheladas, servicio a domicilio",
        rutaInterna: "",
        correo: ""
    },

    {
        nombre: "Piscinas y Accesorios RS SAS Darien y Cerrito",
        imagen: "./img/Piscinasrs.jpeg",
        descripcion: "Suministros de insumos químicos y accesorios para un óptimo funcionamiento de su piscina, asesoría, mantenimiento, construcción, reparación de piscinas, turcos, jacuzzis, fuentes y espejos de agua, redes eléctricas y redes de gas",
        ubicacion: "Calima Darien Calle 12 No. 7 - 59 - Sede Santa Elena Cerrito calle 4 # 3-66",
        telefono: "Darien 3174424874<br>Cerrito 3174412589",
        pagWeb: "https://piscinasyaccesoriosrs.com/rs",
        keywords: "insumos quimicos, mantenimiento, construccion, reparacion de piscinas, turcos, jacuzzis, fuentes, espejos de agua, redes eléctricas, redes de gas.",
        rutaInterna: "https://piscinasyaccesoriosrs.com/rs",
        correo: "info@piscinasyaccesoriosrs.com"
    },

    {
        nombre: "FerreMundo Siglo 21",
        imagen: "./img/ferremundo.png",
        descripcion: "Autoservicio, electrodomésticos, tecnología, pinturas, accesorios, lavaplatos, estufas, pvc, tuberías de agua, candados, cascos, viseras protectoras, cerámica, perfilería, sika, lijas, pulidora, varillas, hierro, etc...",
        ubicacion: "calle 7 # 6-31 B/Obrero",
        telefono: "3226167001",
        pagWeb: "https://www.instagram.com/ferremundosiglo21/",
        keywords: "ferreteria, autoservicio, electrodomesticos, tecnologia, pintura, accesorios, lavaplatos, estufa, tornilleria, pvc, tuberias agua, candados, cascos, viseras protectoras, ceramica, perfileria, sika, lijas, pulidora, varillas, hierro",
        rutaInterna: "https://www.instagram.com/ferremundosiglo21/",
        correo: "Ferremundosiglo21@gmail.com"
    },

    {
        nombre: "Mally Nails",
        imagen: "./img/mallynails.jpeg",
        descripcion: "Manicura semi, Pedicura semi, Forrado acrílico polygel, Kapping, Acrílicas esculpidas, tradicional para pies, etc…",
        ubicacion: "Servicio a domicilio de Darién a Puente Tierra.",
        telefono: "3116341633",
        pagWeb: "https://www.instagram.com/mally_nailss/",
        keywords: "uñas, manicura semi, pedicura, domicilio, forrado acrilico polygel, kapping, esculpidas, tradicional, pies",
        rutaInterna: "https://www.instagram.com/mally_nailss/",
        correo: ""
    },

    {
        nombre: "Mazamorra Maxi",
        imagen: "./img/mazamorramaxi.jpeg",
        descripcion: "Mazamorra y Champús Maxi 100% natural.",
        ubicacion: "",
        telefono: "3215076117",
        pagWeb: "",
        keywords: "mazamorra, Champus, comestible",
        rutaInterna: "",
        correo: "maxirojas1345@gmail.com"
    },

    {
        nombre: "Paga Rápido Calima",
        imagen: "./img/pagarapidocalima.jpeg",
        descripcion: "Giros, pago de servicios, seguro, soat, envíos (inter rapidísimo, servientrega, DHL), certificado de tradición, banco, corresponsal(grupo aval, Falabella, Davivienda, bancamia, móvil,) suscripciones (netflix, amazon prime, spotify, etc…) recargas, compras por amazon y ebay.",
        ubicacion: "Cra 6 # 14-40 a un costado del centro multipropósito (tesorería municipal) B/La Virgen.",
        telefono: "3042842485",
        pagWeb: "",
        keywords: "giros, pago de servicios, seguro, soat, envios, inter, rapidisimo, servientrega, dhl, pago de servicios, certificado de tradicion, banco, corresponsal aval, falabella, davivienda, bancamia, suscripciones, netflix, amazon prime, spotify, recargas, compras amazon ebay",
        rutaInterna: "",
        correo: ""
    },

    {
        nombre: "Rehabilitación y Diagnostico",
        imagen: "./img/rehabilitacionydiagnostico.jpeg",
        descripcion: "Electrocardiograma con reporte médico, Monitoreo Ambulatorio de Presión Arterial, Espirometria, Terapia Respiratoria, Lavado Nasal.",
        ubicacion: "Agenda tu cita y vamos hasta tu domicilio.",
        telefono: "3117966529",
        pagWeb: "",
        keywords: "Salud, presion arterial, electrocardiograma, terapia respiratoria, espirometria, rehabilitación, lavado nasal",
        rutaInterna: "",
        correo: ""
    },

    {
        nombre: "Tienda Naturista Vive Mejor",
        imagen: "./img/tiendanaturistavivemejor.jpeg",
        descripcion: "Venta de productos naturales, citrato de magnesio, ar17, flexdol, artrim, colágenos, biotinas, vitamina c, tratamientos para artritis, insomnio, colesterol, estreñimiento, dolores articulares artrosis, artritis.",
        ubicacion: "Calle 10 # 5-36 por la defensa civil",
        telefono: "3162572997",
        pagWeb: "https://instagram.com/vivemejor_tienda_naturista?igshid=MmU2YjMzNjRlOQ==",
        keywords: "salud, naturales, citrato de magnesio, ar17, flexdol, artrim, colageno, biotinas, vitamina c, tratamientos para artritis, insomnio, colesterol, estreñimiento, dolores articulares artrosis, artritis",
        rutaInterna: "https://instagram.com/vivemejor_tienda_naturista?igshid=MmU2YjMzNjRlOQ==",
        correo: "rosalbaguzman18@gmail.com"
    },

    {
        nombre: "Verónica Gamarra Giraldo Odontología",
        imagen: "./img/odontologiaveronica.jpg",
        descripcion: "El mejor momento para visitar al odontólogo es cuando no te duele nada. Crema Glister para la Sensibilidad Dental",
        ubicacion: "Calle 11 # 4-64 consultorio 2",
        telefono: "3172922417",
        pagWeb: "",
        keywords: "salud, odontologia. limpieza, tratamiento, crema dental",
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
        keywords: "papeleria, kawaii, impresiones, cuadernos, libros, marcadores, fotocopias, cartulina, lapiceros, cartucheras, colores, lienzos vinilos, resmas papel, agendas, loncheras, notas adhesivas, impresión laser",
        rutaInterna: "https://www.instagram.com/smazpapelaz_/",
        correo: "smazpapelaz2022@gmail.com"
    },

    {
        nombre: "Tienda Automotriz Calima",
        imagen: "./tienda-automotriz-calima/tienda-automotriz-calima.jpeg",
        descripcion: "Venta de baterías, cambios de aceite, tornillería, mantenimiento preventivo, aceites, sistema de frenos, amortiguación, filtros, herramienta, filtración para aire acondicionado y sistema de refrigeración automotriz.",
        ubicacion: "Cra 6 # 11-62",
        telefono: "3155697534 - 3154553795",
        pagWeb: "https://buscadorcalima.com/tienda-automotriz-calima/tienda-automotriz-calima.html",
        keywords: "transporte, ferreteria, baterias, cambios de aceite, tornilleria, mantenimiento preventivo, aceites, sistema de frenos, amortiguacion, filtros, herramienta, filtracion para aire acondicionado y sistema de refrigeración automotriz",
        rutaInterna: "./tienda-automotriz-calima/tienda-automotriz-calima.html",
        correo: "dianabetancourt80@gmail.com"
    },

    {
        nombre: "Vanidosas Belleza Capilar",
        imagen: "./img/vanidosasbellezacapilar.jpeg",
        descripcion: "<b>Tienda virtual y fisica. Sabemos lo frustrante que es tener un cabello maltratado.</b><br>Amplia gama de productos para el cabello, productos nacionales e importados, para que puedas satisfacer la necesidad de tu cabello. Atención rápida y un proceso de pedido sencillo para que no pierdas tiempo valioso. Ventas al Detal, domicilios dentro de la zona paga tu pedido al momento que lo recibas.",
        ubicacion: "Calle 11 # 4-07 B/San Jorge",
        telefono: "3163704804",
        pagWeb: "https://www.facebook.com/Vanidosas.calimaDarien",
        keywords: "productos capilares, cuidado cabello, shampoo, tratamientos, mascarillas, acondicionador",
        rutaInterna: "https://www.facebook.com/Vanidosas.calimaDarien",
        correo: "lilimasavi@gmail.com"
    },

    {
        nombre: "Victor Arias",
        imagen: "./img/victor-arias.jpg",
        descripcion: "Dj de música electrónica, técnico de computadores, desarrollador web, mezcla y master de audio, clases personalizadas de producción musical.",
        ubicacion: "Colombia",
        telefono: "3163251628",
        pagWeb: "https://victorarias.eth.limo/",
        keywords: "dj, música electrónica,matenimiento, técnico de computadores, desarrollador web, mezcla, master, audio, clases personalizadas, producción musical.",
        rutaInterna: "https://victorarias.eth.limo/",
        correo: "djvictor_arias@hotmail.com"
    },

    {
        nombre: "Yogurt Feel",
        imagen: "./img/yogurt-feel.jpeg",
        descripcion: "Delicioso Yogurt de Uva y Fresa<br> También Yogurt Griego",
        ubicacion: "Calima Darien",
        telefono: "3153730917",
        pagWeb: "",
        keywords: "comestible, yogurt, yogurt griego, uva, fresa",
        rutaInterna: "",
        correo: ""
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