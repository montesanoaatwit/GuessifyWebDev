// function processInput() {
// 	// Get the user input from the input element
// 	const userInput = document.getElementById("songInput").value;
	
// 	// Split the user input into four separate strings
// 	const inputSongs = userInput.split(",");
// 	const player1 = inputSongs[0];
// 	const player2 = inputSongs[1];
// 	const player3 = inputSongs[2];
// 	const player4 = inputSongs[3];
	
// 	// Construct the URL with the four inputSongs and redirect to it
// 	const url = `./play.html/?player1=${player1}&player2=${player2}&player3=${player3}&player4=${player4}`;
// 	window.location.href = url;
//   }


// Define a global variable to store the inputSongs
let inputSongs = [];

function processInput() {
  // Get the user input from the input element
  const userInput = document.getElementById("songInput").value;
  
  // Split the user input into four separate strings
  const newInputs = userInput.split(",");
  
  // Add the new inputs to the global inputSongs array
  inputSongs = inputSongs.concat(newInputs);
  
  // Clear the input element for the next input
  document.getElementById("songInput").value = "";
  
  // If all four inputs have been submitted, redirect to the new page
  if (inputSongs.length === 4) {
    // Construct the URL with the four inputs and redirect to it
    const url = `play.html?input1=${inputSongs[0]}&input2=${inputSongs[1]}&input3=${inputSongs[2]}&input4=${inputSongs[3]}`;
    window.location.href = url;
    
    // Reset the inputSongs array for the next session
    inputSongs = [];
  }
}