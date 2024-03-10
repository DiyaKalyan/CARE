document.getElementById("paymentMethod").addEventListener("change", function() {
    var paymentMethod = this.value;
  
    if (paymentMethod === "card") {
      document.getElementById("cardDetails").classList.remove("hidden");
      document.getElementById("upiDetails").classList.add("hidden");
    } else if (paymentMethod === "upi") {
      document.getElementById("cardDetails").classList.add("hidden");
      document.getElementById("upiDetails").classList.remove("hidden");
    }
  });
  
  document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var amount = document.getElementById("amount").value;
    var paymentMethod = document.getElementById("paymentMethod").value;
  
    if (paymentMethod === "card") {
      var cardNumber = document.getElementById("cardNumber").value;
      var expiryDate = document.getElementById("expiryDate").value;
      var cvv = document.getElementById("cvv").value;
  
      // Process card payment
      // You can send the form data to the server for payment processing
    } else if (paymentMethod === "upi") {
      var upiId = document.getElementById("upiId").value;
  
      // Process UPI payment
      // You can send the form data to the server for payment processing
    }
  });