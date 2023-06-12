// Write your code in this file!
const currentUser = "steve austin"
//interpolating variables always use backticks
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
//.slice takes the character that is the first 
const shortGreeting =  `Welcome, ${currentUser.slice(0,1)}!`


