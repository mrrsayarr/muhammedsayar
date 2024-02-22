
// About Me
var aboutme = '<p>I am studying Computer Engineering at Amasya University.' +
    'I am currently not working.' +
    'I am developing myself on GNU/Linux systems and Cyber Security.</p>' +
    '<p>I have been in projects with C#, ASP.NET MVC, Python before. I have the passion to learn. Come on then...</p>';

// About Me JavaScript to HTML
document.getElementById('aboutmediv').innerHTML = aboutme;

// Bio
var bio_age = '22';
var bio_address = 'Sariyer, Istanbul';
var bio_last_update = 'February 22, 2024';

// Bio JavaScript to HTML
document.getElementById('bio_age').innerHTML = bio_age;
document.getElementById('bio_address').innerHTML = bio_address;
document.getElementById('bio_last_update').innerHTML = bio_last_update;



// Work Experience
var work_wguard = 'As an intern, I work in the fields related to Systems Engineering. Here I do work such as' +
    'Virtualization, System Monitoring, Active Directory management, GNU/Linux etc. I develop myself in these areas.';

var work_bordo = 'I did an internship in the field of Web Development at this company. I learned requirements such' +
    'as HTML, CSS, JavaScript. I learned Vue.Js as a framework.';

var work_wguard_time = 'July, 2023 - January, 2024';
var work_bordo_time = 'June, 2022 - September, 2022';

// Work Experience JavaScript to HTML
document.getElementById('work_wguard').innerHTML = work_wguard;
document.getElementById('work_bordo').innerHTML = work_bordo;
// Work Experience Time
document.getElementById('work_wguard_time').innerHTML = work_wguard_time;
document.getElementById('work_bordo_time').innerHTML = work_bordo_time;



