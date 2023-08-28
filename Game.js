let gbtm = document.getElementById("gbtm")
let clutter = document.querySelector("#gbtm");
let newHit;         // Variable to Store value of new hit
let timer = 60      // Variable to  store Timer value
let score = 0;      // variable to store Score
let checking;       // Variable to store value that is inside the bubble upon which the user has clicked
let seerules = document.getElementById("seerules");
let rules = document.getElementById("rules");
let startbtn = document.getElementById("startbtn");
let makenewbubbles = document.getElementById("makenewbubbles");


// All functions used are defined here :
function makeBubble() {
    // Below code is just to calculate how much bubble are to  be needed to correctly fill the screen #responsive design 
    let bh = Math.floor((document.getElementById("gbtm").clientHeight) / 60);
    let bw = Math.floor((document.getElementById("gbtm").clientWidth) / 60);
    let bn = bh * bw;
    // Till Here 
    var bubblenum;
    for (let i = 1; i <= bn; i++) {
        bubblenum = Math.floor(Math.random() * 10)
        clutter.innerHTML += ` <div class="bubble">${bubblenum}</div>`;
    }
    //It Will Create number of bubbles that will exactly fill the white screen of the game 
}
function makeNewHit() {
    newHit = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = parseInt(newHit);
    //It will create a new number to be asked to user that will have to be hitted by user . The number created will always be between 1-10
}
function runTimer() {
    //  Set Interval will update timer every second
    let timerID = setInterval(() => {
        // Condition applied to Stop Timer at "0" and prevent it from going in negative
        if (timer > 0) {
            timer = timer - 1;
            document.querySelector(".timer").textContent = timer;
        }
        else {
            //Incase when timer reaches "0", this code will stop setinterval function and display screen of Game Over and Score
            clearTimeout(timerID);
            gbtm.innerHTML = `<h1 id="gameover">Game Over</h1><h1 id="scorecard">Your Score Is <span>${score}</span></h1><button id="playagain" >Play Again</button>`;
            gbtm.style.flexDirection = "column"   // Flex direction changed so that the content("game over" and "score") can be viewd vertically
            var playagain = document.querySelector("#playagain");
            playagain.addEventListener("click", function () {
                window.location.reload();
            })
        }
    }, 1000);


}
function increaseScore() {
    //Function to increase score
    score += 10;
    document.querySelector(".score").textContent = score
}

seerules.addEventListener("click", () => {
    if (rules.style.display != "block") {
        rules.style.display = "block"
        seerules.textContent = "Lets Play ▶️ ";
        document.querySelector(".container").style.top = "16%";
    }
    else {
        rules.style.display = "none";
        seerules.textContent = "See Rules :  ⬇️";
        document.querySelector(".container").style.top = "38%";
    }
})
startbtn.addEventListener("click", () => {
    runTimer();         // Run the Timer 
    document.querySelector(".container").style.display = "none";        // To disapper the panel

    // Event listioner to listen the event i.e click on the bubble
    gbtm.addEventListener("click", function check(dets) {
        checking = parseInt(dets.target.textContent); // parseint used to convert the string into integer as textcontent returns a string 
        if (checking == newHit) {
            increaseScore();        // If values are matched then score is increased
            gbtm.innerHTML = "";    // To clear the white screen so that new bubbles can be filled up
            makeBubble();           // To create new bubbles
            makeNewHit();           // To create new hit
        }
    })
})
//initial function call to:
makeBubble();       // Create bubble for the first time when screen is loaded
makeNewHit();        // Create a Hit for the first time when screen is loaded

makenewbubbles.addEventListener("click", () => {   // it will help to create new bubbles in case if there is no matching hit
    gbtm.innerHTML = "";
    makeBubble();
})





