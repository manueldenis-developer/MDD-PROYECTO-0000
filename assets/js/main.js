/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('tecnologias__active')
        })

        target.classList.add('tecnologias__active')


        tabs.forEach(tab => {
            tab.classList.remove('tecnologias__active')
        })

        tab.classList.add('tecnologias__active')
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup('.trabajos__container', {
    selectors: {
        target: '.trabajos__card'
    },
    animation: {
        duration: 300
    }
});


/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.trabajos__item')

function activeWork() {
    linkWork.forEach(L => L.classList.remove('trabajos-active'))
    this.classList.add('trabajos-active')
}

linkWork.forEach(L => L.addEventListener('click', activeWork))


/*===== Work Popup =====*/


/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/