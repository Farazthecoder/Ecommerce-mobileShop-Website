const signupBtn = document.querySelector(".signup-button");
const LoginEmail = document.getElementById("email");
const LoginPassword = document.getElementById("password");
const submitBtn = document.getElementById("submit");


signupBtn.addEventListener("click", () => {
    window.location.href = "signup.html";
});


const signupDetails = JSON.parse(localStorage.getItem("signup"));



// {username: 'faraz01khan', email: 'faraz7992@gmail.com', password: '12345', confirmPassword: '12345'}


submitBtn.addEventListener("click", function (e) {
    // console.log(signupDetails.email == LoginEmail.value)
    e.preventDefault() 
    if(!LoginEmail.value || ! LoginPassword.value){
        alert("Please fill all the fields");
    }

    else{
       if(LoginEmail.value == signupDetails.email && LoginPassword.value == signupDetails.confirmPassword){
        
           const loginDetails = {
               loggedIn : true,
            }
            
         alert("thanks for login")
        localStorage.setItem("loginDetails", JSON.stringify(loginDetails));

        window.location.href = "../index.html"
       }

       else{
        alert("something went wrong");
       }

    }
 }) 
