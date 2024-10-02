document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    emailjs.send("service_08qs88s", "template_0ht82q5", {
        email: email,
        message: message
    })
    .then(function(response) {
       alert('Message sent successfully!');
       document.getElementById("email").value = "";
       document.getElementById("message").value = "";

    }, function(error) {
       alert('There was an error sending the message, try again later.');
       document.getElementById("email").value = "";
       document.getElementById("message").value = "";
    });
});
