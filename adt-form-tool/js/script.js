var cust = document.getElementById('cust');
var num = document.getElementById('num');
var addr = document.getElementById('addr');
var phn = document.getElementById('phn');
var csn = document.getElementById('csn');
var branch = document.getElementById('branch');
var acct = document.getElementById('acct');
var issue = document.getElementById('issue');
var amclear = document.getElementById('amclear');
var amcopy = document.getElementById('amcopy');

var amform = document.getElementById('am');
var reform = document.getElementById('re');

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
            hide(reform);
            show(amform);
            break;
        case '#re':
            hide(amform);
            show(reform);
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

var amclipboard = new ClipboardJS(amcopy, {
    text: function() {
        return `---- Acct Mgmt ----\n`
               + `Name: ${cust.value}\n`
               + `Cust#: ${num.value}\n`
               + `Address: ${addr.value}\n`
               + `Phone#: ${phn.value}\n`
               + `CS#: ${csn.value}\n`
               + `Branch: ${branch.value}\n`
               + `MMB/Inf: ${acct.value}\n`
               + `Issue: ${issue.value}`;
    }
});

amclipboard.on('success', function(e) {
    console.log(e);
    amcopy.innerHTML = "Copied!";
    setTimeout(function() {
        amcopy.innerHTML = "Copy";
    }, 2000);
});
amclipboard.on('error', function(e) {
    console.log(e);
});

amclear.addEventListener('click', function(event) {
    document.getElementById('form').reset();
}, false);
