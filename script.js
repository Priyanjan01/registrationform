function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (name === '' || email === '' || username === '' || password === '') {
        alert('All fields must be filled out');
        return false;
    }
    alert('Registration Successful!');
    form.reset();

    return true; 
}
