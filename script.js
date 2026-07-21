const links =
document.querySelectorAll('nav a');

links.forEach(link => {

    link.addEventListener('click', function(){

        console.log("Menu clicado");

    });

});