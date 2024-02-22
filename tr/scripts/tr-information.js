
// Hakkımda
var hakkımda = '<p>Amasya Üniversitesinde Bilgisayar Mühendisliği okumaktayım.' +
' GNU/Linux sistemlere ve Siber Güvenlik alanlarında kendimi geliştiriyorum.</p>' +
'<p>Daha önce C#, ASP.NET MVC, Python ile projelerde bulundum. Öğrenmek için gereken tutkuya sahibim. </p>';

// Hakkımda JavaScript to HTML
document.getElementById('hakkımda').innerHTML = hakkımda;

// Bio
var bio_yas = '22';
var bio_adres= 'Sarıyer, İstanbul';
var bio_tarih = '22 Şubat 2024';

// Bio JavaScript to HTML
document.getElementById('bio_yas').innerHTML = bio_yas;
document.getElementById('bio_adres').innerHTML = bio_adres;
document.getElementById('bio_tarih').innerHTML = bio_tarih;


// İş Deneyimleri
var deneyim_wguard = 'As an intern, I work in the fields related to Systems Engineering. Here I do work such as' +
    'Virtualization, System Monitoring, Active Directory management, GNU/Linux etc. I develop myself in these areas.';

var deneyim_bordo = 'I did an internship in the field of Web Development at this company. I learned requirements such' +
    'as HTML, CSS, JavaScript. I learned Vue.Js as a framework.';

var deneyim_wguard_time = 'July, 2023 - January, 2024';
var deneyim_bordo_time = 'June, 2022 - September, 2022';

// İş Deneyimleri JavaScript to HTML
document.getElementById('deneyim_wguard').innerHTML = deneyim_wguard;
document.getElementById('deneyim_bordo').innerHTML = deneyim_bordo;
// İş Deneyimleri Time
document.getElementById('deneyim_wguard_time').innerHTML = deneyim_wguard_time;
document.getElementById('deneyim_bordo_time').innerHTML = deneyim_bordo_time;