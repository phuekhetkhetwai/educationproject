// change navbar style when scroll

addEventListener("scroll",() => {
    document.querySelector("nav").classList.toggle("window-scroll", scrollY > 0);
});

// show / hide faq answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click",() => {
        faq.classList.toggle("open");

        //change icon
        const icon = faq.querySelector(".faq-icon i");
        if(icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
        
    });
});

//show / hide nav menu
const menu = document.querySelector(".nav-menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

function handleResize() {
    if (window.innerWidth > 1024) {
        // On large screens, hide the open button and close button display the menu horizontally
        openBtn.style.display = "none";
        closeBtn.style.display = "none";
        menu.style.display = "flex";
    } else {
        // On small screens, show the open button, hide the menu
        openBtn.style.display = "inline-block";
        closeBtn.style.display = "none";
        menu.style.display = "none";
    }

}

openBtn.addEventListener("click", ()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";
});

closeBtn.addEventListener("click", ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block"; 

});

// Call handleResize when the page is loaded and when it's resized
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);