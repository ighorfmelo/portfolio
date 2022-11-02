const experience = {
    companys: [
        {
            name: 'UolEdTech',
            role: 'Analista de Desenvolvimento Junior',
            start_date: 1633125600,
            end_date: null,
            description: 'Responsável pela implementação de novas funcionalidades e telas na plataforma de educação corporativa da empresa utilizando testes automatizados. Essas funcionalidades deveriam ser implementadas pixel perfect e de maneira responsiva.',
            technologies: ['VueJs', 'Javascript', 'Git', 'Jest'],
            icon: '',
        },
        {
            name: 'Skore',
            role: 'Estagiário',
            start_date: 1575324000,
            end_date: 1633039200,
            description: 'Responsável pela resolução de problemas no Front-end e Back-end em uma plataforma de educação corporativa.',
            technologies: ['Ruby', 'Javascript', 'VueJs', 'Git'],
            icon: '',
        }
    ]
}

const menu = document.querySelector('.work-menu')
experience.companys.forEach(company => {
    const work = document.createElement('li')
    const text = document.createTextNode('ola')
    work.innerText = company.name
    menu.appendChild(work)
})

