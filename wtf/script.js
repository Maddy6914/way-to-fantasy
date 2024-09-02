const navTrigger = document.querySelector('.navTrigger');
const navbar = document.querySelector('.nav-container');
navTrigger.addEventListener('click', () => {
    navTrigger.classList.toggle('active');
    if (navTrigger.classList.contains('active')) {
        navbar.style.right = "0";
    }
    else {
        navbar.style.right = "3000px";
    }
});



const subm = document.querySelector("#submit");

subm.addEventListener('click', () => {

    const name = document.querySelector("#namesender").value;
    const emailid = document.querySelector("#emailid").value;
    const msg = document.querySelector("#msg").value;

    let sub = " Name: " + name + " Email: " + emailid;


    Email.send({
        SecureToken : "031f4f8c-50d3-46a8-943e-c59b6463792b",
        To: 'waytofantasy@gmail.com',
        From : "xaveasha@gmail.com",
        Subject : sub,
        Body : msg
    }).then(
      message => alert(message)
    );
    
});


 
//  pswrd 52D1DC0DA5514E2D7224B116F0346410F28F
// auth token  031f4f8c-50d3-46a8-943e-c59b6463792b