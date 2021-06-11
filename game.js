/// CALL THE FOLLOWING FUNCTIONS TO RUN THE GAME:
makeGameBoard();

createFood();

createblackhole();

let speed= 100;
let moveWormInterval = setInterval(moveWorm, speed); 

const checkKey = e => changeDirection(e.keyCode); // to connect keys-keyboard arrows
document.onkeydown = checkKey;

// Control function // buttons work/show on the mobile version

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

leftButton.onclick = () => changeDirection (left_direction);
rightButton.onclick = () => changeDirection (right_direction);
upButton.onclick = () => changeDirection (up_direction);
downButton.onclick = () => changeDirection (down_direction);



//     __  ____  ___   ______________  __   _____ ____  ___   ____________   _       ______  ____  __  ___
//    / / / / / / / | / / ____/ __ \ \/ /  / ___// __ \/   | / ____/ ____/  | |     / / __ \/ __ \/  |/  /
//   / /_/ / / / /  |/ / / __/ /_/ /\  /   \__ \/ /_/ / /| |/ /   / __/     | | /| / / / / / /_/ / /|_/ / 
//  / __  / /_/ / /|  / /_/ / _, _/ / /   ___/ / ____/ ___ / /___/ /___     | |/ |/ / /_/ / _, _/ /  / /  
// /_/ /_/\____/_/ |_/\____/_/ |_| /_/   /____/_/   /_/  |_\____/_____/     |__/|__/\____/_/ |_/_/  /_/   
                                                                                                    

