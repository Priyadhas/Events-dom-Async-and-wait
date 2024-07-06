// Function to save the email to sessionStorage
function saveEmail() {
    const emailInput = document.getElementById('emailInput').value;
    sessionStorage.setItem('email', emailInput);
    document.getElementById('output').innerText = `Email saved: ${emailInput}`;
}

// Function to get the email from sessionStorage
function getEmail() {
    const email = sessionStorage.getItem('email');
    if (email) {
        document.getElementById('output').innerText = `Stored email: ${email}`;
    } else {
        document.getElementById('output').innerText = 'No email found in sessionStorage.';
    }
}

// Function to remove the email from sessionStorage
function removeEmail() {
    sessionStorage.removeItem('email');
    document.getElementById('output').innerText = 'Email removed from sessionStorage.';
}
