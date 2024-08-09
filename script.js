let menuIcon=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};



let sections = document.querySelector('section');
let navlinks = document.querySelector('header nav a');
window.onscroll = ()=>{
  sections.forEach(sec =>{
  let top = window.scrollY;
  let offset = sec.offsetTop - 150;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id');
  if(top>=offset && top< offset+height){
    navLinks.forEach(links=>{
      links.classList.remove('active');
      document.querySelector('header nav a[href*='+ id +']').classList.add('active');
    });

  };
});
}

window.onscroll = ()=>{
let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);};

/*remove whn click nabar*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');



/*Dark MOde*/
let darkModeIcon=document.querySelector('#darkMode-icon');
darkModeIcon.onclick=()=>{
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
}

const form=document.querySelector('form');
const fullName=document.getElementById("name");
const phone=document.getElementById('phone');
const subject=document.getElementById('subject');
const email=document.getElementById('email');
const mess=document.getElementById('message');
function sendEmail(){
  const bodyMessage= `Full Name:${fullName.value}<br> Email:${email.value}<br> Phone Number:${phone.value}<br> Message:${mess.value}`;
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "muraliofficial12@gmail.com",
    Password : "C25431726F7040C77D8D381CF3081D1BE798",
    To : 'muraliofficial12@gmail.com',
    From : "muraliofficial12@gmail.com",
    Subject :subject.value,
    Body :bodyMessage
}).then(
  message => {
     if(message=="OK"){
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
     }
  }
);
}
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  sendEmail()});