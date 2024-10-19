document.getElementById('validateButton').addEventListener('click', function() {
    const email = document.getElementById('inputEmail').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        document.getElementById('result').textContent = "Valid email address.";
    } else {
        document.getElementById('result').textContent = "Invalid email address.";
    }
});
