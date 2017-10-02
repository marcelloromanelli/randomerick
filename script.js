(function (window, document) {
    var quotes = [
        'I am the most deterministic person I know',
        'I go to caaaaaaca 💩',
        'I was hit by a bellet ',
        'I am the most exagerated person in the whole universe',
        'Yeaaaah! Let s see',
        'git did',
        'this I mean',
        'I LOVE ❤️',
        'ALL',
        'Does anybody knows where is Jakub?',
        'I wish I could die!',
        'I dont speak like this'
    ];

    setInterval(function () {
        var rand = quotes[Math.floor(Math.random() * quotes.length)];
        var randomQuote = document.getElementById('randomQuote');
        randomQuote.innerHTML = rand;
    }, 1500);

})(window, document);
