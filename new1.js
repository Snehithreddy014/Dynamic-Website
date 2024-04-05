/*var myIndex = 0;
carousel();
let contactpara = document.getElementById('contact-para');

function carousel() {
    var j;
    var y = document.getElementsByClassName("mySlides1");
    for (j = 0; j < y.length; j++) {
        y[j].style.display = "none";
    }
    myIndex++;
    if (myIndex > y.length) {
        myIndex = 1
    }
    y[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}*/
function openFullscreenView(fullscreenId) {
    const fullscreenView = document.getElementById(fullscreenId);
    fullscreenView.style.display = 'flex';
}

// Function to close the full-screen view
function closeFullscreenView(fullscreenId) {
    const fullscreenView = document.getElementById(fullscreenId);
    fullscreenView.style.display = 'none';
}
let form = document.getElementById('form');
form.onsubmit = (event) => {
    event.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let mobile = document.getElementById('mobile');
    let message = document.getElementById('message');

    emailjs.init('3F-KqbAOtE0kPuTW-');
    var templateParams = {
        to_name: "Vishnu",
        from_name: name.value,
        from_email: email.value,
        from_mobile: mobile.value,
        message: message.value,
        project: 'Mayons Vriksham Grande',
    };
    emailjs.send("service_9fkaa2f", "template_nap09ke", templateParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
        }, function(error) {
            console.error("Email could not be sent:", error);
        });

    name.value = '';
    email.value = '';
    message.value = '';
    mobile.value = '';
    contactpara.classList.remove('d-none');

};

let i1 = document.getElementById('i1');
let i2 = document.getElementById('i2');

let form1 = document.getElementById('form1');
form1.onsubmit = (event) => {
    event.preventDefault();
    var mountainImageUrl = 'https://res.cloudinary.com/dtqmufptd/image/upload/v1702448294/WhatsApp_Image_2023-12-13_at_11.47.29_29de67e4_crm1wo.jpg';

    fetch(mountainImageUrl)
        .then(response => response.blob())
        .then(blob => {
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'Brouchure.jpg';
            link.click();
        })
        .catch(error => console.error('Error downloading image:', error));

    i1.value = "";
    i2.value = "";


}