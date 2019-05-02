/**
 * Author: Quevedo Ramos, Brayan
 * Co-Author: Millet, Jordan
 * 
 * Date: 4/29/19
 * 
 * Purpose:
 *          - This is the page where the navbar will be displayed on the page.
 *          - Place this at the top of the body of the html page.  
 *          - Code as normal Nav bar and make sure to add \ at the end of each line.    
 *          - Code will be pasted into the page.
 *      
 * General Notes:
 *          - Make sure to check the <base href="" /> and make sure that it goes to the 
 *            root dir, so it can work on any page.
 *          - If adding to nav later, pretend that your coding from the root folder.
 */

document.write('\
\
    <!--Navigation-->\
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">\
        <div class="container">\
            <a class="navbar-brand js-scroll-trigger" href="#page-top">Sprague CTE</a>\
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="navbar-toggler-icon"></span>\
            </button>\
            <div class="collapse navbar-collapse" id="navbarResponsive">\
                <ul class="navbar-nav ml-auto my-2 my-lg-0">\
                    <li class="nav-item">\
                        <a class="nav-link js-scroll-trigger" href="#about">About</a>\
                    </li>\
                    <li class="nav-item">\
                        <a class="nav-link js-scroll-trigger" href="#services">Services</a>\
                    </li>\
                    <li class="nav-item">\
                        <a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>\
                    </li>\
                    <li class="nav-item">\
                        <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>\
                    </li>\
                </ul>\
            </div>\
        </div>\
    </nav>\
    <!--./Navigation-->\
');

// Debugging Statement
console.log('The navigation bar has been loaded.');