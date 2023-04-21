burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
rightNav = document.querySelector(".right-nav");
navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  rightNav.classList.toggle("v-classResp");
  navList.classList.toggle("v-classResp");
  navbar.classList.toggle("h-navResp");
});

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sharmasachin2698@gmail.com",
        Password : "67A9AC72D11776FC100B0424C0D62B4398FB",
        To : 'sharmasachin2698@gmail.com',
        From : 'sharmasachin2698@gmail.com',
        Subject : "These are user details",
        Body : {Username: document.getElementById("name").value,
        // Email: document.getElementById("email").value,
        Phone: document.getElementById("phone").value,
        Address: document.getElementById("address").value,
        Date: document.getElementById("date").value
    }
    }).then(
      message => alert(message)
    );
}
 