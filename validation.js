const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('firstname-input');
const password_input = document.getElementById('firstname-input');
const repeat_password_input = document.getElementById('firstname-input');
const error_message = document.getElementById('error-message');
form.addEventListener('submit' , (e) => {
   // e.preventDefault();

    let errors = []

    if(firstname_input) {
        // if we have a firstname input then we are in the signup
    errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }

    else {
        // if we don't have a firstname input then we are in the login page
        errors = getloginFormErrors(email_input.value, password_input.value)
    }
    if(password_input.lengh < 8) {
        errors.push('Password must be at least 8 characters long')
        password_input.parentElement.classList.add('incorrect')
    }
    if(errors.lengh > 0) {
        // If there are any errorrs
        e.preventDefault(); 
        error_message.innterText = errors.join('. ')
    }
})

function getSignupFormErrors(firstname,email,password,repeatPassword) {
  let errors = [];

  if(firstname === '' ||firstname == null) {
    errors.push('Firstname is required')
    firstname_input.parentElement.classList.add('incorrect')
    }
      if(email === '' ||email == null) {
    errors.push('email is required')
    email_input.parentElement.classList.add('incorrect')
    }
      if(password === '' ||password == null) {
    errors.push('password is required')
    password_input.parentElement.classList.add('incorrect')

       
  } 
  return errors;
}
const allInputs = [firstname_input, email_input, password_input, repeat_password_input]

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(iinput.parentElement.classlist.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
        if(password !== repeatedPassword)
            errors.push('Passwords do not match repeated password')
            password_input.parentElement.classList.add('incorrect')
            repeatPassword_input.parentElement.classList.add('incorrect')


    
    })
})