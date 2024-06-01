console.log("connected")


const customerName = document.getElementById("full-name");
const address = document.getElementById("address");
const pincode = document.getElementById("pincode");
const phoneNumber = document.getElementById("phone");
const paymentMethod = document.getElementById("payment-method");
const submitBtn = document.getElementById("submit");

// console.log(customerName)
// console.log(address)
// console.log(pincode)
// console.log(phoneNumber)
// console.log(paymentMethod)


submitBtn.addEventListener("click",function(e){
    e.preventDefault()

    if(customerName.value && address.value && pincode.value && phoneNumber.value && paymentMethod.value){
        const customerDetails = {
            customerName: customerName.value,
            address: address.value,
            pincode: pincode.value,
            phoneNumber: phoneNumber.value,
            paymentMethod: paymentMethod.value,
        }
    
        localStorage.setItem("paymentMethod", JSON.stringify(customerDetails))
        window.location.href = "order.html"  
    }

    else{
        alert("Please fill all the details")
    }

});



