//burger
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__list')
burger.addEventListener('click', function () {
    burger.classList.toggle('active')
    nav.classList.toggle('menu')
})

// langs
let langs = document.querySelector('.lang');
let langsHidden = document.querySelector('.lang-hidden');
let main = document.querySelector('main');

langs.addEventListener('click', function () {
    langsHidden.classList.add('lang-toggle')
})

main.addEventListener('click', function () {
    langsHidden.classList.remove('lang-toggle')
    burger.classList.remove('active')
    nav.classList.remove('menu')
})

//active links
// no finished
let links = document.querySelectorAll('.header__list-link');
let langSelected = document.querySelectorAll('.lang-hidden-a');
links[0].classList.add('activeLink');
links[0].style.fontWeight = '700';
langSelected[0].classList.add('activeLink');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        for (let k = 0; k < links.length; k++) {
            links[k].classList.remove('activeLink');
            links[k].style.fontWeight = '400';
        }
        links[i].classList.add('activeLink');
        links[i].style.fontWeight = '700';
    })
}
for (let i = 0; i < langSelected.length; i++) {
    langSelected[i].addEventListener('click', function () {
        for (let k = 0; k < langSelected.length; k++) {
            langSelected[k].classList.remove('activeLink')
        }
        langSelected[i].classList.add('activeLink')
    })
}

// footer link
let footerLinks = document.querySelectorAll('.f');

for (let i = 0; i < footerLinks.length; i++) {
    footerLinks[i].addEventListener('click', function () {
        for (let k = 0; k < links.length; k++) {
            links[k].classList.remove('activeLink')
            links[k].style.fontWeight = '400';
        }
        links[i].classList.add('activeLink')
        links[i].style.fontWeight = '700';
    })
}
//scroll effect buuuuuuuuuuuuuuuuuuuuug
// window.addEventListener('scroll', function(){
//     if(this.window.scrollY <= links[2].scrollTop){
//         links[2].style.color = 'red !important'
//     }
// })
// let sec = document.getElementById('sec4')

//english part
langSelected[1].addEventListener('click', greatBritain)
function greatBritain(){
    e1.textContent = 'Home'
    e2.textContent = 'What are we doing'
    e3.textContent = 'Career'
    e4.textContent = 'Our work'
    e5.textContent = 'Contacts'
    e8.src = 'img/flags/GB.svg'
    e9.textContent = 'gb'
    e11.textContent = 'Connect us'
    e12.textContent = 'Your advisor in the world of fintech'
    e13.textContent = 'We develop complex fintech projects for your business. We create advanced IT solutions for online trading and publishing financial media content.'
    e14.textContent = e11.textContent
    e15.textContent = 'Why choose us'
    me1.innerHTML = 'Support:' + '<br>' + '<a href=#>support@.com <a/>'
    me2.textContent = e11.textContent
    e16.textContent = 'The financial analysis'
    e17.textContent = 'Get a detailed assessment of your business from the best experts in the financial sector and unleash the potential of your company'
    e18.textContent = 'Fintech Apps'
    e19.textContent = 'Stay ahead of the curve with innovative platforms and apps designed around the latest trends in mobile UI/UX'
    e20.textContent = 'Financial social networks'
    e21.textContent = 'Make yourself known in the world of social networks and build professional communications with other financial market participants'
    e22.textContent = 'Finding a liquidity solution platform'
    e23.textContent = 'Implement the most effective marketing strategies with us: we develop individual solutions for your business'
    e24.textContent = 'Recruitment in the financial sector'
    e25.textContent = 'Work with leaders in finance: we help you find the best specialists and form a valuable offer tailored to your interests'
    e26.textContent = 'More'
    e27.textContent = 'Our work'
    e28.textContent = 'To learn more'
    e29.textContent = 'Career'
    e30.textContent = 'We hold exhibitions'
    e31.textContent = 'Since 2010'
    e31.style.textAlign = 'center'
    e32.textContent = 'Of the year'
    e33.textContent = 'We work'
    e34.textContent = 'At 15+'
    e35.textContent = 'Countries of the world'
    e36.textContent = 'Organized over'
    e37.textContent = 'Offline meetings'
    e38.textContent = 'Still have questions?Let \'s discuss'
    e39.textContent = 'Fill the form'
    e40.placeholder = 'Your name*'
    e41.placeholder = 'Your phone number*'
    e42.placeholder = 'Your mail*'
    e43.placeholder = 'Your message'
    e44.textContent = 'Send'
    e45.textContent = e1.textContent
    e46.textContent = e2.textContent
    e47.textContent = e3.textContent
    e48.textContent = e4.textContent
    e49.textContent = e5.textContent
}
langSelected[0].addEventListener('click', function(){
    history.go(0) == location.reload()
})
