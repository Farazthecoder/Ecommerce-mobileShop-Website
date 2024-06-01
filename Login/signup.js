console.log("connected");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submit = document.getElementById("submit");





submit.addEventListener("click",function(e){
    e.preventDefault()
    if(!username.value || !password.value || !confirmPassword.value || !email.value){
        alert("Please fill all the fields")
    }

    else{
        if(password.value === confirmPassword.value){
            const signUpInfo = {
                username:username.value,
                email:email.value,
                password:password.value,
                confirmPassword:confirmPassword.value,
            }
            // console.log(signUpInfo)
              alert("You have successfully signed up")
            localStorage.setItem('signup',JSON.stringify(signUpInfo))

            window.location.href = "index.html"
        }

        else{
            alert("Passwords do not match")
        }
    }
})