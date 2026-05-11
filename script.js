function showMsg(msg) {
  document.getElementById('output').innerText = msg + ' module opened.';
}

function exportExcel() {
  alert('Excel export feature can be connected to SheetJS.');
}

// Popup on page load
window.addEventListener('load', () => {
  alert('Pending entries available. Please review.');
});

// Popup every 1 hour
setInterval(() => {
  alert('Reminder: Please check pending Display and Target entries.');
}, 60 * 60 * 1000);
