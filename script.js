// FADE-IN ANIMATIONS

const faders = document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right"
);

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
){
    entries.forEach(entry => {

        if(!entry.isIntersecting){
            return;
        }

        entry.target.classList.add("show");
        appearOnScroll.unobserve(entry.target);

    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// NOTEBOOK GALLERY

const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let current = 0;

/* SHOW PAGE */

function showPage(index) {

    pages.forEach((page) => {

        page.classList.remove("active");

    });

    pages[index].classList.add("active");
}

/* NEXT BUTTON */

nextBtn.addEventListener("click", () => {

    current++;

    if(current >= pages.length){
        current = 0;
    }

    showPage(current);
});

/* PREVIOUS BUTTON */

prevBtn.addEventListener("click", () => {

    current--;

    if(current < 0){
        current = pages.length - 1;
    }

    showPage(current);
});