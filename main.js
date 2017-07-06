var quoteStr;
var quoteToLink;

$(document).ready(function () {
  var quoting = function getQuote() {
    $.ajax({
      headers: {
        'X-Mashape-Key': '6Qn9PvTTHWmshtqJAj1PzcsMhFg3p17H8Y9jsnohJdBQVvQH7X',
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=leadership&count=1',
      dataType: 'json',
      type: 'GET',
      success: function (result) {
        console.log(result);
        quoteStr = JSON.stringify(result.quote);
        authorStr = JSON.stringify(result.author);
        quoteToLink = 'https://twitter.com/intent/tweet?text="' + quoteStr.slice(1, -1).replace(/ /g, '%20') + '"' + ' - ' + authorStr.slice(1, -1).replace(/ /, '%20');
        $('.twitter-share-button').attr('href', quoteToLink);
        document.getElementById('ourQuote').innerHTML = '" ' + quoteStr.slice(1,-1) + '"';
        document.getElementById('quoteAuthor').innerHTML = 'Author: ' + authorStr.slice(1,-1);
      },
    });
  };

  quoting();
  $('#quoteGen').on('click', quoting);
});
