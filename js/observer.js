// observer fade in
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -350px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            entry.target.classList.toggle("appear", entry.isIntersecting)
            if (entry.isIntersecting) appearOnScroll.unobserve(entry.target)
        });
    },
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// observer slide in

const sliders = document.querySelectorAll(".slide-in");
const slideOptions = {
    threshold: 0,
    rootMargin: "-25% 0% -25% 0%"
};

const slideOnScroll = new IntersectionObserver(function (
        entries,
        slideOnScroll
    ) {
        entries.forEach(entry => {
            entry.target.classList.toggle("slide-appear", entry.isIntersecting)
        });
    },
    slideOptions);

sliders.forEach(slider => {
    slideOnScroll.observe(slider);
});

// new observer

const pops = document.querySelectorAll(".pop-in");
const popOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const popOnScroll = new IntersectionObserver(function (
        entries,
        popOnScroll
    ) {
        entries.forEach(entry => {
            entry.target.classList.toggle("pop-appear", entry.isIntersecting)
            if (entry.isIntersecting) popOnScroll.unobserve(entry.target)
        });
    },
    popOptions);

pops.forEach(pop => {
    popOnScroll.observe(pop);
});