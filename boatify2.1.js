var typed_out = document.getElementById('Typedtext');
var i = 0;
var words = ["BoatyFy", "EarPhone", "Phone", "Watches", "HeadPhone"];

function changeWord() {
    typed_out.innerHTML = words[i];
    typed_out.parentElement.style.width = typed_out.offsetWidth + 'px';
    i = (i + 1) % words.length;
    setTimeout(changeWord, 10000); // 10 seconds
}

changeWord();