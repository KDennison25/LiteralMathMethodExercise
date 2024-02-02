 let warmHugs = "Hi, I'm Olaf and I like warm hugs." // 1a
console.log(warmHugs.toUpperCase()); // 1b
console.log(warmHugs.replace('like', 'love')); // 1c
warmHugs = warmHugs.replace('like','love')
let beenImpaled = "Oh, look at that. I've been impaled." // 2a
console.log(beenImpaled.slice(17)); // 2b
let dotDotDot = "..." // 3a
let skullBones = `I don't have a skull${dotDotDot}or bones.` // 3b
console.log(skullBones);
console.log(Math.PI); // 4
let randomNumber = Math.random() * 3
// console.log(randomNumber);
randomNumber = Math.ceil(randomNumber)
console.log(randomNumber); // 5

 console.log("Let It Go!" .toUpperCase() .repeat(2).trim()); // 6
let reindeers = "Reindeers are better than people" // 7a
console.log(reindeers.replaceAll(" ","_")); // 7b
console.log(Math.SQRT2); // 8
let newRandomNumber =  Math.floor(Math.random() *17) +7
console.log(newRandomNumber);