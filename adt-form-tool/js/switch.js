var reForm = document.getElementById('re');
var amForm = document.getElementById('am');

function hide(element) {
    if(!element.classList.contains('hidden')) {
        element.classList.add('hidden');
    }
}

function show(element) {
    if(element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
}

function switchTo(hash) {
    switch(hash) {
        case '#am':
            hide(reForm);
            show(amForm);
            break;
        case '#re':
            hide(amForm);
            show(reForm);
            break;
    }
}

window.onload = function() {
    var hash = window.location.hash;
    if(hash == '#') {
        return;
    } else {
        switchTo(hash);
    }
}

window.onhashchange = function() {
    var hash = window.location.hash;
    switchTo(hash);
}
