document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Validate form inputs
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
  
    var isValid = true;
  
    // Validate name
    if (name === '') {
      document.getElementById('nameError').innerText = 'Name is required';
      isValid = false;
    } else {
      document.getElementById('nameError').innerText = '';
    }
  
    // Validate phone number
    if (phone === '') {
      document.getElementById('phoneError').innerText = 'Phone number is required';
      isValid = false;
    } else {
      // Simple phone number validation, you can customize according to your requirements
      var phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerText = 'Invalid phone number';
        isValid = false;
      } else {
        document.getElementById('phoneError').innerText = '';
      }
    }
  
    // Validate email
    if (email === '') {
      document.getElementById('emailError').innerText = 'Email is required';
      isValid = false;
    } else {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        isValid = false;
      } else {
        document.getElementById('emailError').innerText = '';
      }
    }
  
    // Validate message
    if (message === '') {
      document.getElementById('messageError').innerText = 'Message is required';
      isValid = false;
    } else {
      document.getElementById('messageError').innerText = '';
    }
  
    if (isValid) {
      // Construct the mailto link
      var mailtoLink = 'mailto:youremail@example.com' + '?subject=Contact%20Form&body=Name:%20' + encodeURIComponent(name) + '%0APhone:%20' + encodeURIComponent(phone) + '%0AEmail:%20' + encodeURIComponent(email) + '%0AMessage:%20' + encodeURIComponent(message);
  
      // Open default email client with prefilled values
      window.location.href = mailtoLink;
    }
  });
  