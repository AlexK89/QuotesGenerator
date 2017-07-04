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
        document.getElementById('ourQuote').innerHTML = '<span style="font-weight:bold;">Quote:</span> ' + quoteStr;
        document.getElementById('quoteAuthor').innerHTML = '<span style="font-weight:bold;">Author: </span>' + authorStr;
      },
    });
  };

  quoting();
  $('#quoteGen').on('click', quoting);
});
