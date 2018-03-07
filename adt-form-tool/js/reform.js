// Variables for Relocation form
var reForm   = document.getElementById('re');
var reInputs = amForm.querySelectorAll("input, textarea");
var reCopy   = document.getElementById('recopy');
var reClear  = document.getElementById('reclear');

var reClipboard = new ClipboardJS(reCopy, {
    text: function() {
        return `---- Relocation ----\n`
               + `Name: ${reInputs[0].value}\n`
               + `Cust#: ${reInputs[1].value}\n`
               + `Site#: ${reInputs[2].value}\n`
               + `Address: ${reInputs[3].value}\n`
               + `Phone#: ${reInputs[4].value}\n`
               + `Question: ${reInputs[5].value}\n`
    }
});

reClipboard.on('success', function(e) {
    console.log(e);
    reCopy.innerHTML = "Copied!";
    setTimeout(function() {
        reCopy.innerHTML = "Copy";
    }, 2000);S
});
reClipboard.on('error', function(e) {
    console.log(e);
});

reClear.addEventListener('click', function(event) {
    event.preventDefault();
    amForm.reset();
}, false);

reCopy.addEventListener('click', function(event) {
    event.preventDefault();
}, false);
