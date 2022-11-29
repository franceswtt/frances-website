const links = [
    {
        "id": 1,
        "title": "Home",
        "link": "#home",
        "icon": "icons/home-icon.svg"
    },
    {
        "id": 2,
        "title": "About Me",
        "link": "#about",
        "icon": "icons/about-icon.svg"
    },
    {
        "id": 3,
        "title": "My Skills",
        "link": "#mySkills",
        "icon": "icons/my-skills.svg"
    },
    {
        "id": 4,
        "title": "My References",
        "link": "#myRef",
        "icon": "icons/ref-icon.svg"
    },
    {
        "id": 5,
        "title": "My Game",
        "link": "#game",
        "icon": "icons/game-icon.svg"
    },
    {
        "id": 6,
        "title": "Contact Me",
        "link": "#myContact",
        "icon": "icons/chat.svg"
    }
]
let searchLinks

const searchResult = document.querySelector(".search-result")
const searchInput = document.querySelector(".text-bar")

searchInput.addEventListener("input", (e) => {
    searchResult.classList.remove("hide")
    const value = e.target.value.toLowerCase()
    searchLinks.forEach(link => {
        const isIncluded = link.title.toLowerCase().includes(value)
        link.element.classList.toggle("hide", !isIncluded)

        link.element.addEventListener("click", (e) => {
            e.preventDefault()
            const header = document.querySelector("header")
            const selectedId = e.currentTarget.children[0].getAttribute("href")
            const selectedContainer = document.querySelector(selectedId)
            const headerHeight = header.getBoundingClientRect().height

            let position = selectedContainer.offsetTop - headerHeight

            window.scrollTo({
                left: 0,
                top: position
            })
            searchResult.classList.add("hide")
        })
    })

})
searchLinks = links.map(data => {
    const element = document.createElement("div")
    element.classList.add("search-link")
    element.innerHTML = `<a href="${data.link}"><img src="${data.icon}" alt="${data.title}">${data.title}</a>`
    searchResult.append(element)
    return {title: data.title, linkTo: data.link, element}
})