// ===============================
// LOGIN CHECK
// ===============================
if (localStorage.getItem("userLoggedIn") !== "true") {
  // 🔴 redirect after login
  localStorage.setItem("redirectAfterLogin", "booking.html");
  window.location.href = "login.html";
}

// ===============================
// SUBMIT BOOKING
// ===============================
function submitBooking() {

  const customerName = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const bikeNumber = document.getElementById("bikeNumber").value.trim();
  const bikeName = document.getElementById("bikeName").value.trim();
  const serviceType = document.getElementById("serviceType").value;
  const pickup = document.getElementById("pickup").checked;

  if (!customerName || !phone || !bikeNumber || !bikeName || !serviceType) {
    alert("Please fill all fields");
    return;
  }

  // ===============================
  // SAVE BOOKING (LOCAL)
  // ===============================
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  const booking = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    customerName,
    phone,
    bikeNumber,
    bikeName,
    serviceType,
    pickup
  };

  bookings.unshift(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  // ===============================
  // 📲 WHATSAPP MESSAGE
  // ===============================
  const adminPhone = "918160991036"; // 🔴 CHANGE ONLY IF NEEDED

  const message = `
Hello 👋  
🚲 *National Auto Garage*

📌 *New Booking Received*

🧾 Booking ID: ${booking.id}
👤 Customer: ${customerName}
📞 Mobile: ${phone}
🏍 Bike: ${bikeName} (${bikeNumber})
🛠 Service: ${serviceType}
🚚 Pickup: ${pickup ? "Yes" : "No"}
📅 Date: ${booking.date}

Please check dashboard.
Thank you 🙏
`;

  const whatsappURL =
    "https://wa.me/" +
    adminPhone +
    "?text=" +
    encodeURIComponent(message);

  // 🔥 IMPORTANT (must be direct user action)
  window.open(whatsappURL, "_blank");

  alert("Booking submitted successfully!");
  window.location.href = "my-bookings.html";
}
