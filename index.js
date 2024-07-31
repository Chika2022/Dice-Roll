document
  .getElementsByTagName("button")[0]
  .addEventListener("click", function () {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;

    const randomDiceImage = `dice${randomNumber1}.png`;

    const randomImagesSrc = `images/${randomDiceImage}`;

    document.querySelectorAll("img")[0].setAttribute("src", randomImagesSrc);

    // const randomNumber1=Math.floor(Math.random() * 6) +1;

    // const randomDiceImage= `dice${randomNumber1}.png`;

    // const randomImageSrc = `images/${randomDiceImage}`;

    // document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc)

    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    const randomImageSrc2 = `images/dice${randomNumber2}.png`;

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

    console.log(randomImageSrc2, randomImagesSrc);

    if (randomNumber1 > randomNumber2) {
      document.getElementsByTagName("h1")[0].innerHTML = "😂Player 1 wins";
    } else {
      document.getElementsByTagName("h1")[0].innerHTML =
        "Player 2 wins Player 1 loss";
    }

    if (randomNumber1 === randomNumber2) {
      document.getElementsByTagName("h1")[0].innerHTML = "🚮This is a Draw";
    }
  });

// Now this above can we used to generate 1-6 random number also but its longer

/*
let randomNumber1 = Math.random();
randomNumber1= randomNumber1 * 6;
randomNumber1=Math.floor(randomNumber1)+1;
console.log(randomNumber1);

Now this above can we used to generate 1-6 random number also but its longer */
