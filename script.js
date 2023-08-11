window.addEventListener('DOMContentLoaded', (e) => {
    let navs = document.querySelectorAll('nav ul li a');

    navs.forEach((lin) => {
        lin.addEventListener('click', (e)=>{
            e.preventDefault();
            let target = lin.getAttribute('href');
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () =>{
    let skill = document.querySelector('.skill_1');
    let edu = document.querySelector('.edu');
    let ojt = document.querySelector('.ojt')

    let ListSkill = document.querySelector('.skillList');
    let eduCaList = document.querySelector('.eduList');
    let expList =document.querySelector('.expList');

    skill.addEventListener('mouseover', ()=>{
        ListSkill.style.display = 'block'
    })
    skill.addEventListener('mouseout', ()=>{
        ListSkill.style.display = 'none'
    })

    edu.addEventListener('mouseover', ()=>{
        eduCaList.style.display = 'block'
    })
    edu.addEventListener('mouseout', ()=>{
        eduCaList.style.display = 'none'
    })

    ojt.addEventListener('mouseover', ()=>{
        expList.style.display = 'block'
    })
    ojt.addEventListener('mouseout', ()=>{
        expList.style.display = 'none'
    })
})