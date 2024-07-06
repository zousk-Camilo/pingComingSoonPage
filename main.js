const inputEmail = document.querySelector('.inputEmail');
const btn = document.querySelector('.buttonSubmit');

const error = document.querySelector('.errorMessage');

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');


btn.addEventListener('click', e=>{
    e.preventDefault();
    if(regex.test(inputEmail.value)){
        error.textContent =`The email ${inputEmail.value} send succesfull`
        error.classList.add('active');
        error.style.color = 'green'
    }else if(!regex.test(inputEmail.value)){
        error.classList.add('active');
        error.style.color = 'red'
    }
})