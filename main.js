window.onload = function(){

    // Function Watch the time 

    function UpdateTime(){
        let currentTime = new Date();
        let Hours = currentTime.getHours().toString().padStart(2,"0");
        let Minutes = currentTime.getMinutes().toString().padStart(2,"0");
        let Second = currentTime.getSeconds().toString().padStart(2,"0");
        document.getElementById("currentTime").innerHTML = Hours + ":" + Minutes + ":" + Second;
    }
        // Update the time every single second ! 

    setInterval(UpdateTime , 1000)

    // Function Send Email 

    function SendEmail(){
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
let params = {
    email:email,
    message:message,
}
emailjs.send("service_08qs88s", "template_0ht82q5", params)
.then(function(response) {
alert('Message sent successfully!');
document.getElementById("email").value = "";
document.getElementById("message").value = "";
document.getElementById("time").value = "";
} , function(error) {
alert('There was an error sending the message, try again later.');
document.getElementById("email").value = "";
document.getElementById("message").value = "";
document.getElementById("time").value = "";
});
};

document.getElementById("emailForm").addEventListener('submit' , (e)=>{
    e.preventDefault();

     // the time input this the user

    const inputTime = document.getElementById("time").value;
    let currentTime = new Date();
    let Hours = currentTime.getHours().toString().padStart(2,"0");
    let Minutes = currentTime.getMinutes().toString().padStart(2,"0");
    let Second = currentTime.getSeconds().toString().padStart(2,"0");
    const formattedCurrentTime = Hours + ":" + Minutes;
    if(inputTime<formattedCurrentTime){
        alert("Error: The entered time cannot be in the past.");
        return;
    }
// Interval 
    const Interval = setInterval(()=>{
        let currentTime = new Date();
        let Hours = currentTime.getHours().toString().padStart(2,"0");
        let Minutes = currentTime.getMinutes().toString().padStart(2,"0");
        let Second = currentTime.getSeconds().toString().padStart(2,"0");
        const formattedCurrentTime = Hours + ":" + Minutes;
        if(inputTime === formattedCurrentTime){
            SendEmail()
            clearInterval(Interval);
            alert("The time has been reached, and the message is being sent.");
        }
    },1000);
    alert("The time has been set!");
})
}

