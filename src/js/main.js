
let menu_icon = document.querySelector('.menu_icon');
let bars = document.querySelector('.bars');
let times = document.querySelector('.times');
let times_icon = document.querySelector('.times_icon');
let navbar_wrapper = document.querySelector('.navbar_wrapper');
let topMenu_item = navbar_wrapper.querySelector('.topNavItem');
let bottomMenu_item = navbar_wrapper.querySelector('.bottomNavItem');
let cardBtn = navbar_wrapper.querySelector('.cardBtn');
let lan = document.querySelector('#languagePicker');
let lanDsk = document.querySelector('#languagePickerDsk');
let languageDropdown = document.querySelector('#languageDropdown');
let languageDropdownDsk = document.querySelector('#languageDropdownDsk');
// console.log(menu_item);
// navbar handle responsive
menu_icon.addEventListener('click', ()=>{
    navbar_wrapper.classList.toggle('-left-full');
    navbar_wrapper.classList.toggle('-left-4');
    bars.classList.toggle('hidden');
    times.classList.toggle('hidden');
    // alert(menu_icon.innerHTML)
})

topMenu_item.addEventListener('click', ()=>{
    navbar_wrapper.classList.toggle('-left-full');
    navbar_wrapper.classList.toggle('-left-4');
    bars.classList.toggle('hidden');
    times.classList.toggle('hidden');
})
bottomMenu_item.addEventListener('click', ()=>{
    navbar_wrapper.classList.toggle('-left-full');
    navbar_wrapper.classList.toggle('-left-4');
    bars.classList.toggle('hidden');
    times.classList.toggle('hidden');
})
cardBtn.addEventListener('click', ()=>{
    navbar_wrapper.classList.toggle('-left-full');
    navbar_wrapper.classList.toggle('-left-4');
    bars.classList.toggle('hidden');
    times.classList.toggle('hidden');
})
// language picker
lan.addEventListener('click', ()=>{
    languageDropdown.classList.toggle('hidden')
})
// language picker desktop
lanDsk.addEventListener('click', ()=>{
    languageDropdownDsk.classList.toggle('hidden')
})