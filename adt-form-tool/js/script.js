// Variables for Account Management form
var amForm   = document.getElementById('am');
var amInputs = amForm.querySelectorAll("input, textarea");
var amCopy   = document.getElementById('amcopy');
var amClear  = document.getElementById('amclear');

// Variables for Relocation form
var reForm   = document.getElementById('re');
var reInputs = amForm.querySelectorAll("input, textarea");
var reCopy   = document.getElementById('recopy');
var reClear  = document.getElementById('reclear');

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

/*var amclipboard = new ClipboardJS(amcopy, {
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
}, false);*/

amcopy.addEventListener('click', function(event) {
    console.log(amInputs[0].value);
}, false);
