function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('datetime').textContent = dateTimeString;
}

setInterval(updateDateTime, 1000);
updateDateTime();
