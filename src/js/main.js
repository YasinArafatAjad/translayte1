
let menu_icon = document.querySelector('.menu_icon');
let bars = document.querySelector('.bars');
let times = document.querySelector('.times');
let times_icon = document.querySelector('.times_icon');
let navbar_wrapper = document.querySelector('.navbar_wrapper');
let lan = document.querySelector('#languagePicker');
let lanDsk = document.querySelector('#languagePickerDsk');
let languageDropdown = document.querySelector('#languageDropdown');
let languageDropdownDsk = document.querySelector('#languageDropdownDsk');
// navbar handle responsive
menu_icon.addEventListener('click', ()=>{
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