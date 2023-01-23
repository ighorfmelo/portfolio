const experience = {
    companys: [
        {
            name: 'UOL EdTech',
            role: 'Analista de Desenvolvimento Junior',
            start_date: '10/2021',
            end_date: null,
            description: 'Responsável pela implementação de novas funcionalidades e telas na plataforma de educação corporativa da empresa utilizando testes automatizados. Essas funcionalidades deveriam ser implementadas pixel perfect e de maneira responsiva.',
            technologies: ['VueJs', 'Javascript', 'Git', 'Jest'],
            icon: '',
        },
        {
            name: 'Skore',
            role: 'Estagiário',
            start_date: '12/2019',
            end_date: '09/2021',
            description: 'Responsável pela resolução de problemas no Front-end e Back-end em uma plataforma de educação corporativa.',
            technologies: ['Ruby', 'Javascript', 'VueJs', 'Git'],
            icon: '',
        }
    ]
}

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