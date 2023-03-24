
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