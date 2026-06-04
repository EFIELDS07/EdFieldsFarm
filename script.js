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

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.hero-video');

    if (video) {
        video.playbackRate = 0.9;
    }
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
   HISTORY REVEAL
========================================= */

document.querySelectorAll('.history-toggle').forEach(toggle => {

    toggle.addEventListener('click', () => {

        const box = toggle.closest('.history-box');

        box.classList.toggle('active');

    });

});

const historySection = document.querySelector('.history-section');
const worker = document.querySelector('.history-worker');
const pallet = document.querySelector('.history-pallet-stack');
const boxes = document.querySelectorAll('.history-box');
const warning = document.querySelector('.history-warning');

const historyObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

setTimeout(() => {

    worker.classList.add('animate');
    pallet.classList.add('animate');

    boxes.forEach((box, i) => {

        setTimeout(() => {
            box.classList.add('drop-in');
        }, i * 120); // stagger prevents flash

    });

    setTimeout(() => {
        warning.classList.add('hit');
    }, 1200);

}, 50);
            historyObserver.unobserve(historySection);

        }

    });

}, {
    threshold:0.4
});

historyObserver.observe(historySection);

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

const farmLifeSection =
document.querySelector(".farm-life-wrapper");

const farmObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            farmLifeSection.classList.add("pulling");

            farmObserver.disconnect();

        }

    });

},{
    threshold:.3
});

farmObserver.observe(farmLifeSection);

const revealBtn =
document.getElementById("revealPrices");

const cover =
document.querySelector(".inspector-cover");

revealBtn.addEventListener("click", () => {

    cover.classList.add("revealed");

});