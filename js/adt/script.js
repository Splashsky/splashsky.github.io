var name = document.getElementById('name');
var num = document.getElementById('num');
var addr = document.getElementById('addr');
var phn = document.getElementById('phn');
var csn = document.getElementById('csn');
var branch = document.getElementById('branch');
var acct = document.getElementById('acct');
var issue = document.getElementById('issue');
var clear = document.getElementById('clear');

var clipboard = new ClipboardJS('.button', {
    text: function() {
        return 'A string.';
    }
});

clipboard.on('success', function(e) {
    console.log(e);
    button.innerHTML = "Copied!";
    setTimeout(function() {
        button.innerHTML = "Copy";
    }, 2000);
});
clipboard.on('error', function(e) {
    console.log(e);
});

clear.addEventListener('click', function(event) {
    document.getElementById('form').reset();
}, false);
