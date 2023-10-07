document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;
    
    sendEmail(name, email, feedback);
});

function sendEmail(name, email, feedback) {
   
    emailjs.init("HBdFQ1htrZ0G9Y2ei");
    
    var params = {
        from_name: name,
        from_email: email,
        message: feedback
    };
    
    emailjs.send("service_2koh6ji", "template_uuzrm77", params)
        .then(function(response) {
            console.log("Email sent:", response);
            alert("Email sent successfully!");

           
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("feedback").value = "";
        }, function(error) {
            console.error("Email error:", error);
            alert("Error sending email.");
        });
}
