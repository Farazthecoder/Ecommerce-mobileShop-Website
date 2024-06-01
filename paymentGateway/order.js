console.log("connected");

const orderDetails = document.querySelector(".order-details");

const accessOrderData = JSON.parse(localStorage.getItem("paymentMethod"));

// {customerName: 'Faraz khan', address: 'H.N 42 tajukhel pili khoti Shahjahanpur', pincode: '242001', phoneNumber: '07275235488', paymentMethod: 'Cash On Delivery'}

const html = `
<h2>Order Details</h2>
<p><strong>Property Name:</strong> <span id="property-name">${accessOrderData.customerName}</span></p>
<p><strong>Address:</strong> <span id="address">${accessOrderData.address}</span></p>
<p><strong>Pincode:</strong> <span id="pincode">${accessOrderData.pincode}</span></p>
<p><strong>Phone Number:</strong> <span id="phone-number">${accessOrderData.phoneNumber}</span></p>
<p><strong>Payment Method:</strong> <span id="payment-method">${accessOrderData.paymentMethod}</span></p>
`;

 orderDetails.insertAdjacentHTML("afterbegin",html)
