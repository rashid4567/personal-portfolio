/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function handleForm(event) {
    // Prevent default form submission
    event.preventDefault();

    // Call sendMail function
    sendMail();
}

(function () {
    // Initialize EmailJS with the correct user/public key
    emailjs.init("Sq1dYVRaDOG7-KthD");
})();

function sendMail() {
    // Get form values
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Send email via EmailJS
    emailjs
        .send("service_eb12p5n", "template_xjk1e9c", params)
        .then(
            function (response) {
                // Show success message
                document.getElementById("submitSuccessMessage").classList.remove("d-none");
                document.getElementById("submitErrorMessage").classList.add("d-none");
                console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
                // Show error message
                document.getElementById("submitErrorMessage").classList.remove("d-none");
                document.getElementById("submitSuccessMessage").classList.add("d-none");
                console.error("FAILED...", error);
            }
        );
}
