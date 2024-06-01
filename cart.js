console.log("connected for cart")


const tbody = document.getElementById("tbody");
const amountToPay = document.getElementById("amtToPay");
// console.log(amountToPay)


const dataArray = JSON.parse(localStorage.getItem("cart"));
console.log(dataArray)

let amtToPay = 0

dataArray.forEach((item,i)=>{


    amtToPay = amtToPay + item.totalPrice
    // console.log(item)
    const html = ` <tr id ="tchange">
    <td>${i+1}</td>
    <td>${item.mobileName}</td>
    <td>${item.quantity}</td>
    <td>${item.price}</td>
    <td>${item.totalPrice}</td>
</tr>`

 tbody.insertAdjacentHTML("beforeend", html)
})


amountToPay.innerText = "PAY : Rs " + amtToPay;



