let name;
let email;
let question;

function validateForm() {
    name = document.querySelector('#name').value || '';
    email = document.querySelector('#email').value || '';
    question = document.querySelector('#question').value || '';

    if (name == '' || email == '' || question == '') {
        alert('All fields are required.');
    }

    if (name !== '' && email !== '' && question !== '') {
        alert('Form submitted successfully!');
    }

}
