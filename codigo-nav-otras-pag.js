
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

    function copiarTexto() {
        var texto = document.getElementById("texto-copiar").textContent;
    
        navigator.clipboard.writeText(texto)
            .then(() => {
                var boton = document.querySelector("button");
                boton.innerHTML = "¡Copiado!";
            })
            .catch(err => {
                console.error("Error al copiar el texto:", err);
            });
    }

        



    // fa_xmark.addEventListener ('click', function() {
    //     container__ul.classList.toggle ("#fa_bars")
    // })