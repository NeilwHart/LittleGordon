document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#datepicker", {
      dateFormat: "d-m-y", // Adjust the format as needed (e.g., Y-m-d, d-m-Y, etc.)
      allowInput: true // Allows manual input
    });
  });