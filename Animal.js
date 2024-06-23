function animalChecker() {
    let animalName;
    let number;
    let name;
    animalName = prompt("What animals are you interested in?");
    number = prompt("How many you would like to adopt?");
    name = prompt(`What is your name?`);
    animalHeader.innerHTML = `Hi ${name}, I heard ${animalName} are your favorite animals!`;
    animalParagraph.innerHTML = `These great animals need homes. Your ${number} ${animalName} are ready for their new home!`;
  }
  
  animalButton.onclick = animalChecker;