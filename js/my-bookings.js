// ===============================
// LOGIN CHECK
// ===============================
if (localStorage.getItem("userLoggedIn") !== "true") {
  window.location.href = "login.html";
}

// ===============================
// LOAD BOOKINGS INTO TABLE
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("bookingTableBody");

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  if (bookings.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center;padding:20px;">
          No bookings found
        </td>
      </tr>`;
    return;
  }

  tableBody.innerHTML = "";

  bookings.forEach(b => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${b.date}</td>
      <td>
        ${b.customerName}<br>
        <small>${b.phone}</small>
      </td>
      <td>
        ${b.bikeName}<br>
        <small>${b.bikeNumber}</small>
      </td>
      <td>${b.serviceType}</td>
      <td>
        <span class="badge ${b.pickup ? "yes" : "no"}">
          ${b.pickup ? "Yes" : "No"}
        </span>
      </td>
    `;

    tableBody.appendChild(row);
  });
});
