// MENU MOBILE GENGUE

function toggleMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");

}


// Fechar menu ao clicar num link

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        const menu = document.getElementById("menu");

        if(menu){

            menu.classList.remove("active");

        }

    });

});