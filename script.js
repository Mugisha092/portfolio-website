$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});





var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName(){
    var name=document.getElementById('contact-name').value;

    if(name.length==0){
        nameError.innerHTML="Name is required";
        submitError.disabled = true;
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write full name';
        return false;
    }
    nameError.innerHTML='<i class="fas fa-check-circle">' ;
    return true;
}
var name=document.getElementById('contact-name').value;
if (nameError.length === 0 ) {
  submitEror.disabled = true;
  
  
}else{

  submitEror.disabled = false;

}

function validatePhone(){
    var phone=document.getElementById('contact-phone').value;
    if(phone.length==0){
        phoneError.innerHTML='Phone is reqired';
        return false;
    }
    if(phone.length !==  10){
        phoneError.innerHTML='Phone should be 10 digits';
        return false;
    }


    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digits';
        return false;
    }
    phoneError.innerHTML='<i class="fas fa-check-circle">' ;
    return true;
}
function validateEmail(){
    var email=document.getElementById('contact-email').value;

    if(email.length==0){
        emailError.innerHTML="Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Iinvalid email';
        return false;
    }
    emailError.innerHTML='<i class="fas fa-check-circle">' ;
    return true;
}
function validateMessage(){
    var message=document.getElementById('contact-message').value;
    var required=30;
    var left=required-message.length;
    if(message.length==0){
        messageError.innerHTML="Message is required";
        return false;
    }
    if(left>0){
        messageError.innerHTML=left + ' more characters required';
        return false;
    }
    messageError.innerHTML='<i class="fas fa-check-circle">';
    return true;
}
function validateform(){
    if(!validateName()||!validatePhone()||!validateEmail()||!validateMessage()){
        submitError.style.display="block";
        submitError.innerHTML='Please fix error';
        setTimeout(function(){submitError.style.display="none";},3000);
        return false;
    }
}

 submitError.disabled=true;