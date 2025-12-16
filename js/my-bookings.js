// ===============================
// LOGIN CHECK
// ===============================
if (localStorage.getItem("userLoggedIn") !== "true") {
  window.location.href = "login.html";
}

// ===============================
// LOAD BOOKINGS
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const bookingList = document.getElementById("bookingList");

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  if (bookings.length === 0) {
    bookingList.innerHTML = "<p>No bookings found.</p>";
    return;
  }

  let html = `
    <table style="width:100%; border-collapse:collapse;">
      <thead>
        <tr style="background:#e0e7ff;">
          <th style="padding:10px;border:1px solid #d1d5db;">Date</th>
          <th style="padding:10px;border:1px solid #d1d5db;">Customer</th>
          <th style="padding:10px;border:1px solid #d1d5db;">Bike</th>
          <th style="padding:10px;border:1px solid #d1d5db;">Service</th>
          <th style="padding:10px;border:1px solid #d1d5db;">Pickup</th>
        </tr>
      </thead>
      <tbody>
  `;

  bookings.forEach(b => {
    html += `
      <tr>
        <td style="padding:8px;border:1px solid #d1d5db;">${b.date}</td>
        <td style="padding:8px;border:1px solid #d1d5db;">${b.customerName}<br>${b.phone}</td>
        <td style="padding:8px;border:1px solid #d1d5db;">${b.bikeName}<br>${b.bikeNumber}</td>
        <td style="padding:8px;border:1px solid #d1d5db;">${b.serviceType}</td>
        <td style="padding:8px;border:1px solid #d1d5db;">${b.pickup ? "Yes" : "No"}</td>
      </tr>
    `;
  });

  html += "</tbody></table>";
  bookingList.innerHTML = html;
});
