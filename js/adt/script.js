function copy() {
    var text = document.getElementById('textarea');
    text.select();
    document.execCommand('Copy');
}

function setup() {
    var inputs = document.getElementsByTagName('input');
    var name = document.getElementById('name');
    var num = document.getElementById('num');
    var addr = document.getElementById('addr');
    var phn = document.getElementById('phn');
    var csn = document.getElementById('csn');
    var branch = document.getElementById('branch');
    var acct = document.getElementById('acct');

    function set() {
        var element = document.getElementById('textarea');
        var format = `Name: ${name.value}\n`
                     + `Cust#: ${num.value}\n`
                     + `Address: ${addr.value}\n`
                     + `Phone#: ${phn.value}\n`
                     + `CS#: ${csn.value}\n`
                     + `Branch: ${branch.value}\n`
                     + `MMB/Inf: ${acct.value}\n`;
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
