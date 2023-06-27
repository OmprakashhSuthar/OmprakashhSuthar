let check = document.getElementById('checkbox');
let createAccount = document.getElementById('createAccount');
check.addEventListener('change',function(){
    if(check.checked){
        createAccount.disabled = false;
        createAccount.classList.remove('disabled')
    }else{
        createAccount.disabled = true;
        createAccount.classList.add('disabled')
    }
})
var Sign_Up = document.getElementById("signUp-form");
Sign_Up.addEventListener('submit',function(event){
    event.preventDefault();

    const Fname = Sign_Up.Fname.value;
    const Lname = Sign_Up.Lname.value;
    const Email = Sign_Up.email.value;
    const Password = Sign_Up.password.value;

    localStorage.setItem('Fname',Fname);
    localStorage.setItem('Lname',Lname);
    localStorage.setItem('Email',Email);
    localStorage.setItem('Password',Password);
    const fullName =  localStorage.getItem('Fname') + localStorage.getItem('Lname')
    console.log(fullName)
    console.log(Fname)
    const signup = document.getElementById('signup');
    const signin = document.getElementById('signin');

    // signup.addEventListener('change',function(){
        // console.log(signup.innerHTML)
        // signup.innerHTML = fullName;
        // signin.innerHTML = ' ';
    // })
    alert('Welcome '+fullName);
    Sign_Up.reset();
})