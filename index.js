const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.3}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();



const showTooltip = () => {
    let icons = document.querySelectorAll('.profile-icon');
    let tooltip = Array.from(document.querySelectorAll('.tooltip'));

    icons.forEach(item => {
        item.addEventListener('mouseover', () => {
            tooltip.forEach(() => {
                if (item === icons[0]) tooltip[0].style.display = 'block'
                if (item === icons[1]) tooltip[1].style.display = 'block'
                if (item === icons[2]) tooltip[2].style.display = 'block'
                if (item === icons[3]) tooltip[3].style.display = 'block'
            })
        })

        item.addEventListener('mouseout', () => {
            tooltip.forEach(() => {
                if (item === icons[0]) tooltip[0].style.display = 'none'
                if (item === icons[1]) tooltip[1].style.display = 'none'
                if (item === icons[2]) tooltip[2].style.display = 'none'
                if (item === icons[3]) tooltip[3].style.display = 'none'
            })
        })
    });
}
showTooltip()
