function wishlistChecker() {
    let name;
    let item;
    name = prompt("What is your name?");
    item = prompt("Anything you would like to get off your wishlist?");
    wishlistHeader.innerHTML = `Hi ${name}, there is something on your wishlist!`;
    wishlistParagraph.innerHTML = `You still have time to get an item on your wishlist. Your ${item} is discounted for 3 days!`;
  }
  
  wishlistButton.onclick = wishlistChecker;