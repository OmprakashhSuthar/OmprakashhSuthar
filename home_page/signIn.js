let check = document.getElementById('signInCheck');
let createAccount = document.getElementById('signin');
check.addEventListener('change',function(){
    if(check.checked){
        createAccount.disabled = false;
        createAccount.classList.remove('disabled')
    }else{
        createAccount.disabled = true;
        createAccount.classList.add('disabled')
    }
})
const signIn = document.getElementById('signIn-form');
signIn.addEventListener('submit',function(event){
    event.preventDefault();

    const Email = signIn.email.value;
    const Password = signIn.password.value;

    const storedEmail = localStorage.getItem('Email');
    const storedPassword = localStorage.getItem('Password');

    if(Email === storedEmail && Password === storedPassword){
        alert('Login SuccessFully');
        signIn.reset();
    }else{
        alert('Invalid user')
    }

})
