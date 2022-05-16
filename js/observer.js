const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
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

const sliders = document.querySelectorAll(".slide-in");
const slideOptions = {
    threshold: 0,
    rootMargin: "-250px 0px -250px 0px"
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