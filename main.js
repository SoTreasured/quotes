var randomIndex = Math.floor(Math.random() * 3);
var show;

var quote = [
"\"The great thing about quotes is that they pack so much wisdom in so few words \"",
"\"Quotations have made a positive difference in my Life, in some they have changed the way I think about a situation \"",
"\" I often quote myself.It adds spice to my conversation\""
];

function showQuote(){
    titleQuote = document.getElementById("title")
    titleQuote.textContent = quote[randomIndex];
}

function interval(){
    show = setInterval(showQuote, 3000);
}

showQuote();
