$(document).ready(function(){
    $(window).scroll(function(){
        //navbar
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        //scroll button 
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

     
    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer", ""],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // var typed = new Typed(".typing-2", {
    //     strings: ["Developer", "Blogger", "Designer", "Freelancer", ""],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

});

const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress-bar');

function showProgress(){
    progressBars.forEach(progressBar=> {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress(){
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });

}

window.addEventListener('scroll',() => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if(sectionPos < screenPos){
        showProgress();
    }else{
        hideProgress();
    }
});



  const scriptURL = 'https://script.google.com/macros/s/AKfycby27-1hoLGUGyoLf6Cy7kb7Hczh7EwHbws2WC74ibKfp1XKaBTNBTW64OZvTwzLed3y/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent succesfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
