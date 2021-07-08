console.log(document.querySelector('#container'));

let head = document.querySelector('#header-container');

head.style.color = 'white';
head.style.backgroundColor = '#40916c';

let bgdiv = document.getElementsByClassName("emergency-tasks");

for ( let i = 0; i < bgdiv.length; i += 1) {
    bgdiv[i].style.backgroundColor = '#ffafcc';
}
let bgdiv2 = document.getElementsByClassName("no-emergency-tasks");

for ( let i = 0; i < bgdiv.length; i += 1) {
    bgdiv2[i].style.backgroundColor = '#ffd166';
}
let urgent = document.getElementsByTagName("h3");

urgent[0].style.backgroundColor = '#ef476f';
urgent[1].style.backgroundColor = '#ef476f';
urgent[2].style.backgroundColor = '#219ebc';
urgent[3].style.backgroundColor = '#219ebc';




document.getElementById('footer-container').style.backgroundColor = '#081c15';


