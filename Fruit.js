function fruitChecker() {
    let name;
    let fruitName;
    let number;
   fruitName = prompt("What fruit you quench the most?");
    number = prompt("How many you would eat in a day?");
    name = prompt(`What is your name?`);
    fruitHeader.innerHTML = `Hi ${name}, I heard ${fruitName} are your favorite fruit!`;
    fruitParagraph.innerHTML = `These fruit are the best.`;
  }
  
  fruitButton.onclick = fruitChecker;