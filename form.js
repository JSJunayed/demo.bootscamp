const myForm = document.querySelector('#enrollform');
const nameInput = document.querySelector('#first-name');
const textInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    
        setTimeout(() => msg.remove(), 5000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} 
        : ${textInput.value} : ${emailInput.value} : 
        ${phoneInput.value}`));
    
        userList.appendChild(li);
    
        //for clear fields
    
        nameInput.value = '';
        textInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';

    }
}
