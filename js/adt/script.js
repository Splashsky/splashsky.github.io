var name = document.getElementById('name');
var num = document.getElementById('num');
var addr = document.getElementById('addr');
var phn = document.getElementById('phn');
var csn = document.getElementById('csn');
var branch = document.getElementById('branch');
var acct = document.getElementById('acct');
var issue = document.getElementById('issue');
var result = document.getElementById('result');
var clear = document.getElementById('clear');

var clipboard = new ClipboardJS('.button', {
    text: function(trigger) {
        return `Name: ${name.value}\n`
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
    button.innerHTML = "Copied!";
    setTimeout(function() {
        button.innerHTML = "Copy";
    }, 2000);
});

clear.addEventListener('click', function(event) {
    document.getElementById('form').reset();
    result.value = "";
}, false);
