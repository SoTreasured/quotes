var quote = [
"\"The great thing about inspiring quotes is that they pack so much wisdom in so few words.\"<br> <i> -Chris Hughes</i>",
"\"Quotations have made a positive difference in my Life, in some they have changed the way I think about a situation \"<br> <i> -Catherine Pulsifer</i>",
"\" I often quote myself.It adds spice to my conversation.\"<br> <i> -George BernardShaw</i>",
"\" The beauty of quotes is that they allow us to glimpse into another minds and understand how they think and look at the world.\"<br> <i> -Joseph Geran II</i>",
"\"For many of us, inspiration is triggered by the quips and quotations of others.\"<br> <i> -Emilee Day</i> ",
"\" A quote is a powerful tool for our mind, our soul, our spirit. A quote can sharpen your mind and give you and instant and rapid relief if your soul is down, in a dark time. \"<br> <i> -Dotchamou Zakari</i>",
"\"An apt quotation is like a lamp which flings its light over the whole sentence \"<br> <i> -Letitia Landon</i>"
];

function showQuote(){
    const randomIndex = Math.floor(Math.random() * quote.length);
    const titleQuote = document.getElementById("title")
    titleQuote.innerHTML =  quote[randomIndex];
}


   setInterval(showQuote, 3000);



