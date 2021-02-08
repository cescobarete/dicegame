//Roll dice for a game
function RollDie() {
    document.getElementByID("dice").value = Math.floor(Math.random()*6) + 1;
}