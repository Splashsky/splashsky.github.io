function setup() {
    var inputs = document.getElementsByClassName('input');
    var name = document.getElementById('name');
    var num = document.getElementById('num');
    var addr = document.getElementById('addr');
    var phn = document.getElementById('phn');
    var csn = document.getElementById('csn');
    var branch = document.getElementById('branch');
    var acct = document.getElementById('acct');
    var issue = document.getElementById('issue');

    function set() {
        var element = document.getElementById('result');
        var format = `Name: ${name.value}\n`
                     + `Cust#: ${num.value}\n`
                     + `Address: ${addr.value}\n`
                     + `Phone#: ${phn.value}\n`
                     + `CS#: ${csn.value}\n`
                     + `Branch: ${branch.value}\n`
                     + `MMB/Inf: ${acct.value}\n`
                     + `Issue: ${issue.value}`;
        element.value = format;
    }

    for(var input of inputs) {
        input.addEventListener('keydown', function(event) {
            set();
        }, false);
        input.addEventListener('keyup', function(event) {
            set();
        }, false);
    }
}

setup();
