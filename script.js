const experience = {
    companys: [
        {
            name: 'UOL EdTech',
            role: 'Junior Software Developer',
            start_date: '10/2021',
            end_date: null,
            description: 'I worked on implementing different features in the learning management system using the Vue.Js/Nuxt architecture. All of them using pixel perfect design, unit testing, and responsiveness.',
            technologies: ['VueJs', 'Nuxt', 'Javascript', 'Git', 'Jest'],
            icon: '',
        },
        {
            name: 'Skore',
            role: 'Intern',
            start_date: '12/2019',
            end_date: '09/2021',
            description: 'I worked on troubleshooting the Backend and Frontend of the platform in order to improve the customer experience.',
            technologies: ['Ruby', 'Javascript', 'VueJs', 'Git'],
            icon: '',
        }
    ]
}

const colorButton = document.querySelector('.nav_color')
const icon = colorButton.querySelector('i')
const root = document.documentElement

colorButton.addEventListener('click', () => {
    if (icon.classList.contains('uil-moon')) {
        root.style.setProperty('--background-color', 'black')
        root.style.setProperty('--title-color', 'white')
        root.style.setProperty('--text-color', 'white')
        icon.classList.remove("uil-moon")
        icon.classList.add("uil-sun")
    }
    else {
        root.style.setProperty('--background-color', 'rgba(255, 255, 255, 0.8)')
        root.style.setProperty('--title-color', 'hsl(var(--hue-color), 8%, 15%)')
        root.style.setProperty('--text-color', 'hsl(var(--hue-color), 8%, 45%)')
        icon.classList.remove("uil-sun")
        icon.classList.add("uil-moon")
    }
})

const menu = document.querySelector('.work-menu')
const workDescription = document.querySelector('.work-description')
experience.companys.forEach(company => {
    const work = document.createElement('li')
    manageWorks({ target: { innerText: 'UOL EdTech'}})
    work.innerText = company.name
    menu.appendChild(work)
})

menu.addEventListener('click', manageWorks)

function manageWorks(event) {
    selectButton(event.target.innerText)
    const company = experience.companys.find(company => company.name == event.target.innerText)
    const name = document.querySelector('.company-name')
    const role = document.querySelector('.company-role')
    const description = document.querySelector('.company-description')
    const technologies = document.querySelector('.company-technologies')
    const interval = document.querySelector('.company-interval')
    name.innerText = company.name
    role.innerText = company.role
    description.innerText = company.description
    technologies.innerText = company.technologies.join(' / ')
    interval.innerText = company.end_date ? company.start_date + ' - ' + company.end_date : company.start_date + ' - Present'
}

function selectButton(text) {
    menu.childNodes.forEach(element => {

        if (element.innerText == text) {
            element.classList.add("disabled");
        } else {
            element.classList.remove("disabled")
        }

    })
}