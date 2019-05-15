/**
 * Author: Quevedo Ramos, Brayan
 * Co-Author: Millet, Jordan
 * 
 * Date: 4/29/19
 * 
 * Purpose:
 *          - This is the refrence point for all CSS on page.
 *          - Place this at the head of the html page.  
 *          - Code as normal Nav bar and make sure to add \ at the end of each line.    
 *          - Code will be pasted into the page.
 *      
 * General Notes:
 *          - Make sure to check the <base href="" /> and make sure that it goes to the 
 *            root dir, so it can work on any page.
 *          - If adding to this file later, pretend that your coding from the root folder.
 *          - MAKE SURE THAT YOUR NOT ADDING ONE PAGE CSS,
 *            ADD ONE PAGE CSS ON HEAD OF SPECIFIC FILE!!!
 */

// Sample File
// <link rel="stylesheet" href="#">
 
document.write('\
    <!--Global CSS-->\
    <link rel="stylesheet" href="css/global.css">\
\
    <!--Header CSS-->\
    <link rel="stylesheet" href="css/header.css">\
\
    <!--Sidebar CSS-->\
    <link rel="stylesheet" href="css/sidebar.css">\
\
    <!--Footer CSS-->\
    <link rel="stylesheet" href="css/footer.css">\
\
');

// Debugging Statement
console.log('All CSS files have been loaded');