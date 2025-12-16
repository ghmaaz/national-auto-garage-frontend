// ===============================
// LOGIN CHECK
// ===============================
if (localStorage.getItem("userLoggedIn") !== "true") {
  // agar direct booking pe aaya ho
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

  // ❌ validation
  if (
    !customerName ||
    !phone ||
    !bikeNumber ||
    !bikeName ||
    !serviceType
  ) {
    alert("Please fill all fields");
    return;
  }

  if (phone.length !== 10) {
    alert("Enter valid 10 digit mobile number");
    return;
  }

  // 📦 booking object
  const booking = {
    customerName,
    phone,
    bikeNumber,
    bikeName,
    serviceType,
    pickup,
    date: new Date().toLocaleString()
  };

  // 📥 save to localStorage
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("Booking confirmed successfully!");

  // 🔁 redirect to My Bookings
  window.location.href = "my-bookings.html";
}
