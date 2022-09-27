

// smooth scolling feature

var navmenu = document.querySelectorAll('.nav-menu a');

for (var i = 0; i < navmenu.length; i++) {
    navmenu[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetid = this.textContent.trim().toLowerCase();
        var targetsection = document.getElementById(targetid);
        console.log(targetsection);
        var targetsectioncoordinate = targetsection.getBoundingClientRect();
        console.log(targetsectioncoordinate);
        var interval = setInterval(function () {
            var targetsectioncoordinate = targetsection.getBoundingClientRect();
            if (targetsectioncoordinate.top <= 0) {
                // console.log("clear interval")
                clearInterval(interval);
                return;
            }

            window.scrollBy(0, 50);
        }  , 20);
        
        var interval1 = setInterval(function () {
            var targetsectioncoordinate = targetsection.getBoundingClientRect();
            if (targetsectioncoordinate.top >= 0) {
                // console.log("clear interval1")
                clearInterval(interval1);
                return;
            }
    
            window.scrollBy(0, -50);
        } , 50);
       
    
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
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);