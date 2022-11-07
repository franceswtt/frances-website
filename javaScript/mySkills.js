const skillset = [
    {
        "id": 1,
        "skill": "HTML",
        "category": "Coding",
        "img": "images/skillset/HTML5_logo_and_wordmark.svg"
    },
    {
        "id": 2,
        "skill": "CSS",
        "category": "Coding",
        "img": "images/skillset/CSS3_logo_and_wordmark.svg"
    },
    {
        "id": 3,
        "skill": "JavaScript",
        "category": "Coding",
        "img": "images/skillset/Unofficial_JavaScript_logo_2.svg"
    },
    {
        "id": 4,
        "skill": "Python",
        "category": "Coding",
        "img": "images/skillset/Python-logo-notext.svg"
    },
    {
        "id": 5,
        "skill": "MySQL",
        "category": "Coding",
        "img": "images/skillset/MySQL_logo.svg"
    },
    {
        "id": 6,
        "skill": "Figma",
        "category": "Visual Design",
        "img": "images/skillset/Figma-logo.svg"
    },
    {
        "id": 7,
        "skill": "Adobe XD",
        "category": "Visual Design",
        "img": "images/skillset/Adobe_XD_CC_icon.svg"
    },
    {
        "id": 8,
        "skill": "Adobe Premiere",
        "category": "Visual Design",
        "img": "images/skillset/Adobe_Premiere_Pro_CC_icon.svg"
    },
    {
        "id": 9,
        "skill": "Adobe After Effects",
        "category": "Visual Design",
        "img": "images/skillset/Adobe_After_Effects_CC_icon.svg"
    },
    {
        "id": 10,
        "skill": "Adobe Photoshop",
        "category": "Visual Design",
        "img": "images/skillset/Adobe_Photoshop_CC_icon.svg"
    },
    {
        "id": 11,
        "skill": "Adobe Illustrator",
        "category": "Visual Design",
        "img": "images/skillset/Adobe_Illustrator_CC_icon.svg"
    },
    {
        "id": 12,
        "skill": "Adobe InDesign",
        "category": "Visual Design",
        "img": "images/skillset/Adobe_InDesign_CC_icon.svg"
    },
    {
        "id": 13,
        "skill": "Meta",
        "category": "Digital Marketing",
        "img": "images/skillset/Meta_Platforms_Inc._logo.svg"
    },
    {
        "id": 14,
        "skill": "Instagram",
        "category": "Digital Marketing",
        "img": "images/skillset/Instagram_logo_2022.svg"
    },
    {
        "id": 15,
        "skill": "Google Ads",
        "category": "Digital Marketing",
        "img": "images/skillset/Google_Ads_logo.svg"
    },
    {
        "id": 16,
        "skill": "Google Analytics",
        "category": "Digital Marketing",
        "img": "images/skillset/GAnalytics.svg"
    },
    {
        "id": 17,
        "skill": "TikTok",
        "category": "Digital Marketing",
        "img": "images/skillset/TikTok_logo.svg"
    },
    {
        "id": 18,
        "skill": "Pinterest",
        "category": "Digital Marketing",
        "img": "images/skillset/Pinterest_Logo.svg"
    },
    {
        "id": 19,
        "skill": "Shopify",
        "category": "Digital Marketing",
        "img": "images/skillset/Shopify_logo_2018.svg"
    },
    {
        "id": 20,
        "skill": "Klaviyo",
        "category": "Digital Marketing",
        "img": "images/skillset/Klaviyo_primary_logo.svg"
    }
]

const skillsetItems = document.querySelector(".skillset-items")
const skillsBtnContainer = document.querySelector(".skillsBtn-container")

window.addEventListener("DOMContentLoaded", ()=> {
    displaySkillset(skillset)
    displayBtn(skillset)
})

function displaySkillset(skills){
    let display = skills.map(item => {
        return `<div class="skill-item">
                   <img src=${item.img} alt=${item.skill} class="skill-image">
                 </div>`
    }).join("")
    skillsetItems.innerHTML = display
}

function displayBtn(skills){
    const categories = [... new Set(skills.map(item => item.category))]
    categories.unshift("All")

    let catBtn = categories.map(cat => {
     return `<button class="skill-btn" data-id="${cat}">${cat}</button>`
    }).join("")
    skillsBtnContainer.innerHTML = catBtn

    const skillBtns = document.querySelectorAll(".skill-btn")

    skillBtns.forEach(function(btn){
        btn.addEventListener("click", (e)=>{
            const category = e.currentTarget.dataset.id
            console.log(category)
            const skillsetCategory = skillset.filter((skills) => {
                if(skills.category === category){
                    return skills
                }
            })
            if (category === "All"){
                displaySkillset(skillset)
            }
            else{
                displaySkillset(skillsetCategory)
            }
        })
       })
    
}