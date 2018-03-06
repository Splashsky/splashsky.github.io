var cust = document.getElementById('cust');
var num = document.getElementById('num');
var addr = document.getElementById('addr');
var phn = document.getElementById('phn');
var csn = document.getElementById('csn');
var branch = document.getElementById('branch');
var acct = document.getElementById('acct');
var issue = document.getElementById('issue');
var clear = document.getElementById('clear');
var copy = document.getElementById('copy');

var amform = document.getElementById('am');
var reform = document.getElementById('re');

function hide(element) {
    if(!element.classList.contains('hide')) {
        element.classList.add('hide');
    }
}

function show(element) {
    if(element.classList.contains('hide')) {
        element.classList.remove('hide');
    }
}

window.onload = function() {
    var hash = (window.location.hash).replace('#', '');
    if(hash.length == 0) {
        return;
    } else {
        if(hash == 'am') {
            hide(reform);
            show(amform);
        }
        if(hash == 're') {
            hide(amform);
            show(reform);
        }
        return;
    }
}

var clipboard = new ClipboardJS(copy, {
    text: function() {
        return `--- AACF ----\n`
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

clipboard.on('success', function(e) {
    console.log(e);
    copy.innerHTML = "Copied!";
    setTimeout(function() {
        copy.innerHTML = "Copy";
    }, 2000);
});
clipboard.on('error', function(e) {
    console.log(e);
});

clear.addEventListener('click', function(event) {
    document.getElementById('form').reset();
}, false);
