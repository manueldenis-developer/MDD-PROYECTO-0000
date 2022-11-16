



/*=============== TECNOLOGIAS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data.content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove("tecnologias__active")
        })

        target.classList.add('tecnologias__active')

        tabs.forEach(tab => {
            tab.classList.remove("tecnologias__active")
        })

        tab.classList.add('tecnologias__active')
    })
})