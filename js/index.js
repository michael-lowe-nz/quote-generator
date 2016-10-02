var quoteEntry = document.getElementById("quote");
var myButton = document.getElementById("generateQuote");
myButton.addEventListener("click", generateQuote);

var count = 0;

function generateQuote() {
  count++;
  var match = new XMLHttpRequest();
  match.open("GET","http://cricapi.com/api/cricket",false);
  match.send(null);
  var r = JSON.parse(match.response);
  var match = "Match: "+r.data[count].description;
 
  quoteEntry.innerHTML += match+"<br>";

}