// Variables for Account Management form
var amForm   = document.getElementById('am');
var amInputs = amForm.querySelectorAll("input, textarea");
var amCopy   = document.getElementById('amcopy');
var amClear  = document.getElementById('amclear');

var amClipboard = new ClipboardJS(amCopy, {
    text: function() {
        return `---- Acct Mgmt ----\n`
               + `Name: ${amInputs[0].value}\n`
               + `Cust#: ${amInputs[1].value}\n`
               + `Address: ${amInputs[2].value}\n`
               + `Phone#: ${amInputs[3].value}\n`
               + `CS#: ${amInputs[4].value}\n`
               + `Branch: ${amInputs[5].value}\n`
               + `MMB/Inf: ${amInputs[6].value}\n`
               + `Issue: ${amInputs[7].value}`;
    }
});

amClipboard.on('success', function(e) {
    console.log(e);
    amCopy.innerHTML = "Copied!";
    setTimeout(function() {
        amCopy.innerHTML = "Copy";
    }, 2000);S
});
amClipboard.on('error', function(e) {
    console.log(e);
});

amClear.addEventListener('click', function(event) {
    event.preventDefault();
    amForm.reset();
}, false);

amCopy.addEventListener('click', function(event) {
    event.preventDefault();
}, false);
