var nav=document.querySelector('nav');
window.addEventListener('scroll', function(){
    if(window.pageYOffset>100){
        nav.classList.add('bg-dark', 'shadow');
      }else{
        nav.classList.remove('bg-dark','shadow')
       
    }
    
})


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); 
    const navLinks = document.querySelectorAll(".nav-link"); 

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id"); 
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
               if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let circle = entry.target.querySelectorAll('.circle');
                circle.forEach(function(progress) {
                    let degree = 0;
                    const targetDegree = parseInt(progress.getAttribute('data-degree'));
                    const color = progress.getAttribute('data-color');
                    const number = progress.querySelector('.number');
                    
                    // Reset number and background for smooth re-animation
                    number.innerHTML = 0;
                    progress.style.background = `conic-gradient(#222 0%, #222 100%)`;
                    
                    const interval = setInterval(function() {
                        degree += 1;
                        if (degree > targetDegree) {
                            clearInterval(interval);
                            return;
                        }
                        progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
                        number.innerHTML = degree;
                        number.style.color = color;
                    }, 50);
                });
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    // Observe the specific section
    const targetSection = document.querySelector('.count_sect');
    observer.observe(targetSection);
});


// gallery
$(document).ready(function() {
$('.key_procedures_slidr').owlCarousel({
    // center: true,
    //   stagePadding: 2
    loop: true,
    margin: 30,
    nav: true,
    navText: [
        '<img src="..images/key_pre"/>',
        '<img src="..images/key_next.png"/>'
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1,
            margin: 15
        },
        360: {
            items: 1,
            margin: 20
        },
        400: {
            items: 1,
            margin: 20
        },
        600: {
            items: 2
        },
        900: {
            items: 2
        },
        1110: {
            items: 4
        }
    }
});
});













