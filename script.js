(function (window, document) {
    var quotes = [
        'I am the most deterministic person I know',
        'I go to caaaaaaca',
        'I was hit by a bellet'
    ];
    var rand = quotes[Math.floor(Math.random() * quotes.length)];
    
    var randomQuote = document.getElementById('randomQuote');
    randomQuote.innerHTML = rand;
})(window, document);