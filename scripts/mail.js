document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value; // Updated to mobile
    var feedback = document.getElementById("feedback").value;
    
    sendFeedback(name, mobile, feedback);
});

function sendFeedback(name, mobile, feedback) {
    emailjs.init("YWfA4NXgppZDd1qQT");
    
    var params = {
        from_name: name,
        from_mobile: mobile, // Updated to mobile
        message: feedback
    };
    
    emailjs.send("service_l9uwmxt", "template_0c6iq2i", params)
        .then(function(response) {
            console.log("Feedback sent:", response);
            alert("Feedback sent successfully!");

            // Clear the form fields after successful submission
            document.getElementById("name").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("feedback").value = "";
        }, function(error) {
            console.error("Feedback error:", error);
            alert("Error sending feedback.");
        });
}
