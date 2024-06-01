console.log("connected");

const decButtons = document.getElementsByClassName("dec");
const decArrBtns = Array.from(decButtons);
const incButtons = document.getElementsByClassName("inc");
const incArrBtns = Array.from(incButtons);
const CartBtns = document.getElementsByClassName("cart");
const cartArrBtns = Array.from(CartBtns);
const checkCart = document.getElementById("see_cart");

const firstSpan = document.getElementById("first_span");
const secondSpan = document.getElementById("second_span");
const thirdSpan = document.getElementById("third_span");
const fourthSpan = document.getElementById("fourth_span");
const fifthSpan = document.getElementById("fifth_span");
const sixthSpan = document.getElementById("sixth_span");
const seventhSpan = document.getElementById("seventh_span");
const eighthSpan = document.getElementById("eighth_span");
const ninethSpan = document.getElementById("nineth_span");

let countArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let cartArray = [];

let cartAccess = false

// function for the cartobject

function cartObj(span,mobilename,mobileprice) { 
     if(!cartAccess){
      alert("Please Login First");
     }   

    else if (span.innerText == "0") {
        alert("Please add Quantity");
      }
      else {
        alert(
          `${mobilename} of quantity ${span.innerText} added to the cart`
        );

        const numQuantity = Number(span.innerText);
        const quantityObj = {
          mobileName: mobilename,
          price: mobileprice,
          quantity: numQuantity,
          totalPrice: numQuantity * mobileprice,
        };

        cartArray.push(quantityObj);
      }
 }
////////////// decrease button logic /////////////////////////
decArrBtns.forEach((decBtn) => {
  decBtn.addEventListener("click", (e) => {
    if (e.target.id == "first_dec") {
      if (firstSpan.innerText == "0") {
        alert("Quantity should not be negative");
      } else {
        firstSpan.innerText = --countArray[0];
      }
    } else if (e.target.id == "second_dec") {
      if (secondSpan.innerText == "0") {
        alert("Quantity should not be negative");
      } else {
        secondSpan.innerText = --countArray[1];
      }
    } else if (e.target.id == "third_dec") {
      if (thirdSpan.innerText == "0") {
        alert("Quantity should not be negative");
      } else {
        thirdSpan.innerText = --countArray[2];
      }
    } else if (e.target.id == "fourth_dec") {
      if (fourthSpan.innerText == "0") {
        alert("Quantity should not be negative");
      } else {
        fourthSpan.innerText = --countArray[3];
      }
    } else if (e.target.id == "fifth_dec") {
      if (fifthSpan.innerText == "0") {
        alert("Quantity should not be negative");
      } else {
        fifthSpan.innerText = --countArray[4];
      }
    } else if (e.target.id == "sixth_dec") {
      if (sixthSpan.innerText == "0") {
        alert("Quantity should not be negative");
      } else {
        sixthSpan.innerText = --countArray[5];
      }
    } else if (e.target.id == "seventh_dec") {
      if (seventhSpan.innerText == "0") {
        alert("Quantity should not be negative");
      } else {
        seventhSpan.innerText = --countArray[6];
      }
    } else if (e.target.id == "eighth_dec") {
      if (eighthSpan.innerText == "0") {
        alert("Quantity should not be negative");
      } else {
        eighthSpan.innerText = --countArray[7];
      }
    } else if (e.target.id == "nineth_dec") {
      if (ninethSpan.innerText == "0") {
        alert("Quantity should not be negative");
      } else {
        ninethSpan.innerText = --countArray[8];
      }
    }
  });
});

///////////////////////// increase button logic//////////////////

incArrBtns.forEach((incbtn) => {
  incbtn.addEventListener("click", function (e) {
    if (e.target.id == "first_inc") {
      firstSpan.innerText = ++countArray[0];
    } else if (e.target.id == "second_inc") {
      secondSpan.innerText = ++countArray[1];
    } else if (e.target.id == "third_inc") {
      thirdSpan.innerText = ++countArray[2];
    } else if (e.target.id == "fourth_inc") {
      fourthSpan.innerText = ++countArray[3];
    } else if (e.target.id == "fifth_inc") {
      fifthSpan.innerText = ++countArray[4];
    } else if (e.target.id == "sixth_inc") {
      sixthSpan.innerText = ++countArray[5];
    } else if (e.target.id == "seventh_inc") {
      seventhSpan.innerText = ++countArray[6];
    } else if (e.target.id == "eighth_inc") {
      eighthSpan.innerText = ++countArray[7];
    } else if (e.target.id == "nineth_inc") {
      ninethSpan.innerText = ++countArray[8];
    }
  });
});

// Adding to the cart logic

cartArrBtns.forEach((cartBtn) => {
  cartBtn.addEventListener("click", function (e) {
    if (e.target.previousElementSibling.children[1].id === "first_span") {

      cartObj(firstSpan,"Motorola edge 50 pro",29999)

    } else if (
      e.target.previousElementSibling.children[1].id === "second_span"
    ) {

      cartObj(secondSpan,"nothing phone 2a",21999);

    } else if (e.target.previousElementSibling.children[1].id === "third_span") {
        cartObj(thirdSpan,"Samsung s24 ultra",111999);
    }

    else if (e.target.previousElementSibling.children[1].id === "fourth_span") {
        cartObj(fourthSpan,"Iphone 15",68999);
      }

      else if (e.target.previousElementSibling.children[1].id === "fifth_span") {
        cartObj(fifthSpan,"Oneplus 12",65999);
      }
      
      else if (e.target.previousElementSibling.children[1].id === "sixth_span") {
        cartObj(sixthSpan,"Iphone 14pro max",145999);
      }

      else if (e.target.previousElementSibling.children[1].id === "seventh_span") {
        cartObj(seventhSpan,"Nothing Phone 1",23999);
      }

      else if (e.target.previousElementSibling.children[1].id === "eighth_span") {
        cartObj(eighthSpan,"Samsung galaxy A35 5g",30999);
      }

      else if (e.target.previousElementSibling.children[1].id === "nineth_span") {
        cartObj(ninethSpan,"Oneplus 11R 5g",36999);
      }
  });
});

// logic for check cart

checkCart.addEventListener("click", function (e) {
  if (cartArray.length == 0) {
    alert("add items to cart");
  }
   else {
    localStorage.setItem("cart", JSON.stringify(cartArray));
    window.location.href = "cart.html"
  }
});


// logic for login 

const loginInfo = JSON.parse(localStorage.getItem("loginDetails"));
const userDetails = JSON.parse(localStorage.getItem("signup"));
const username = document.getElementById("username");


// {loggedIn: true}

const loginBtn = document.getElementById("login");
// console.log(loginBtn)
if(loginInfo.loggedIn){
  cartAccess = true;
  loginBtn.innerText = "Logout"
  loginBtn.removeAttribute("href")
  username.innerText = `Welcome ${userDetails.username}`
  username.style.display = "block"
}


loginBtn.addEventListener("click",function(){
  if(loginBtn.innerText == "Logout"){
    localStorage.removeItem("loginDetails")
    loginBtn.innerText = "Login"
    loginBtn.setAttribute("href","/Login/index.html")
    username.style.display = "none"
  }
})






