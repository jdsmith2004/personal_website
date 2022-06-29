// SET RANDOM MOTIVATIONAL MESSAGE
fetch("./json/quotes.json")
  .then(response => response.json())
  .then((data) => {
    let quote = data["quotes"] 
    let randomProperty = function (obj) {
      let keys = Object.keys(obj);
      return obj[keys[keys.length * Math.random() << 0]];
    };
    randQuote = randomProperty(quote)
    // print the random quote to console
    console.log(randQuote.quote)
    
    mesgElement = document.querySelector(".randomMotivationalMessage p")
    mesgElement.innerHTML = `${randQuote.quote}`
  })
