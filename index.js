

// smooth scolling feature

var navmenu = document.querySelectorAll('.nav-menu a');
 for( var i=0;i<navmenu.length;i++)
 {
    navmenu[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetsection_id = this.textContent.trim().toLowerCase();
        var targetsection = document.getElementById(targetsection_id);
        console.log(targetsection); 
        
        var interval = setInterval(function(){
            var targetsectioncoordinate = targetsection.getBoundingClientRect();
        console.log(targetsectioncoordinate);
            
            window.scrollBy(0,50);
            if(targetsectioncoordinate.top <=0 ) 
            {
                clearInterval(interval);
                
                return;
            }
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                // you're at the bottom of the page or in case the interval is not cleared when it reaches to bottom of the page
                console.log("contact")
                clearInterval(interval);

            }
            
            
        },20); 
    });
 }

// animate skills section
//check whether the section is skills

var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}


function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            console.log("current width of bar is" + currentWidth)
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
        
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") && (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);








// sending mail using email.js

const btn = document.getElementById('submit');

document.getElementById("contact-form").addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_hclvq3o';
   const templateID = 'template_qpxs3ue';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Contact Me';
      alert('Thanks for contacting !');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});