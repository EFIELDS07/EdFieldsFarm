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
/* =========================================
   PRINTER EFFECT
========================================= */

const invoice =
document.querySelector(".invoice-paper");

const invoiceObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            invoice.classList.add("printing");

            setTimeout(() => {

                invoice.classList.add("stamped");

            }, 1700);

        }

    });

},{
    threshold:.35
});

invoiceObserver.observe(invoice);

/* =========================================
   HISTORY BOX DROP
========================================= */

const historyBoxes =
    document.querySelectorAll(".history-box");

const historyObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            historyBoxes.forEach((box,index) => {

                setTimeout(() => {

                    box.classList.add("drop-in");

                }, index * 350);

            });

        }

    });

},{
    threshold:.2
});

historyObserver.observe(
    document.querySelector(".history-section")
);

/* =========================================
   PRODUCE REVEAL
========================================= */

const crops =
document.querySelectorAll(".crop-card");

const sprout =
document.querySelector(".horizon-sprout");

const produceSection =
document.querySelector(".produce-field-section");

/* DIRT FALL */

const cropObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("grown");

        }

    });

},{
    threshold:.25
});

crops.forEach(crop => {

    cropObserver.observe(crop);

});

/* HORIZON SPROUT */

const sproutObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            setTimeout(() => {

                sprout.classList.add("grow");

            }, 2500);

        }

    });

},{
    threshold:.35
});

sproutObserver.observe(produceSection);