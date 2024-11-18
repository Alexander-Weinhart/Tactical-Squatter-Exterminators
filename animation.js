window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        };
    };
};

var btn = document.getElementById('back-to-top');
var body = document.body;
var docElm = document.documentElement;
var offset = 100;
var scrollPos;
var docHeight;

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElm.scrollHeight, docElm.offsetHeight);

if(docHeight != 'undefined'){
    offset = docHeight / 4;
};

window.addEventListener('scroll', function(){
    scrollPos = body.scrollTop || docElm.scrollTop;

    if(scrollPos > offset){
        btn.className = 'visible';
    } else {
        btn.className = '';
    }
    btn.className = (scrollPos > offset) ? 'visible' : '';
});