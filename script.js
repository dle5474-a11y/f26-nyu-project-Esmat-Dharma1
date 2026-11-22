console.log("script.js is connected");
// wordCollected: remembers whether the player has collected the missing word to restore the story
let wordCollected = false;

// selectedWord remembers which vocabulary word the player is viewing
let selectedWord = null;
// searchText remembers what the player types in the vocabulary search bar
let searchText = "";

// Wordfall Word Collection Data

const words = [

    {
       name: "Foggy",

      definition: "Weather filled with thick mist.",

       category: "Weather",

       pronunciation: "Fôgē"
    },

    {
        name: "Broken",

        definition: "Something that is damaged or no longer working.",

        category: "Condition",
        
        pronunciation: "Brōkən"

    },

    {

        name: "Dark",

        definition: "Having little or no light.",

        category: "Environment",

        pronunciation: "Därk"

    },

    {

        name: "Hidden",

        definition: "Something that cannot easily be seen.",

        category: "Discovery",

        pronunciation: "Hid(ə)n"

    },

    {

        name: "Glowing",

        definition: "Producing a soft light.",

        category: "Environment",

         pronunciation: "GlōiNG"


    }

];
// Find the inventory container in HTML
const container = document.getElementById("content-container");

// Find the definition container in HTML
const definitionContainer = document.getElementById("definition-content");

// Find the search bar in HTML 
const searchInput = document.getElementById("word-search");
//Listen to the player tying in the search bar 
if (searchInput) {
// Update the search state with what the player typed
    searchInput.addEventListener("input", (event) => { searchText = event.target.value;
 // Redraw the page based on the new state
    render();

    });

}

// render: draws the vocabulary buttons, highlights the selected word, and shows its details
// Does the word's name or definition contain the search text? Returns true or false.
function matchesSearch(word) {

    const text = (word.name + " " + word.definition).toLowerCase();

    return text.includes(searchText.toLowerCase().trim());

}
function render() { 

// Clear the old vocabulary buttons before redrawing
if (container) {
    container.innerHTML = "";
}
// Clear the previous definition

if (definitionContainer) {

    definitionContainer.innerHTML = "";

}
// Go through each word in the array
if (container && definitionContainer) {

// Count how many vocabulary words match the search
let shown = 0;
words.forEach(word => {

// Only display words that match the player's search
if (matchesSearch(word)) {
    shown++;
    // Create a button for each word
    const button = document.createElement("button");

    // Display the word's name
    button.textContent = word.name;
    // Highlight the word the player selected
if (selectedWord === word.name) {
    button.classList.add("selected");

    // Display the selected word's information
    const name = document.createElement("h3");
    const pronunciation = document.createElement("p");
    const category = document.createElement("p");
    const definition = document.createElement("p");

    name.textContent = word.name;
    pronunciation.textContent = "Pronunciation: " + word.pronunciation;
    category.textContent = "Category: " + word.category;
    definition.textContent = word.definition;

    definitionContainer.appendChild(definition);
    definitionContainer.appendChild(name);
    definitionContainer.appendChild(pronunciation);
    definitionContainer.appendChild(category);
}
    // When the player clicks the button
    button.addEventListener("click", () => {
// Remember which word the player selected
selectedWord = word.name;

// Redraw the page based on the selected word
render();
       

    });

    // Add the button to the inventory
container.appendChild(button);

    } // Close matchesSearch if statement

});
// Show a helpful message if no vocabulary words match
if (shown === 0) {
    const message = document.createElement("p");
    message.textContent = "No matching words found. Try searching for another word or definition.";
    container.appendChild(message);
}
}
// Close the render function

}
// Draw the vocabulary when the page first loads
render();
// Find the Foggy button and collection message
const foggyButton = document.getElementById("collect-foggy");
const collectionMessage = document.getElementById("collection-message");

if (foggyButton && collectionMessage) {
    // Track whether the player tried collecting Foggy again
let alreadyCollectedClicked = false;
// Update the Foggy button and collection message based on state
function renderFoggy() {
   if (wordCollected === true) {
    foggyButton.textContent = "✓ Foggy Collected";

    if (alreadyCollectedClicked === true) {
        collectionMessage.textContent = "You already collected Foggy!";
    } else {
        collectionMessage.textContent = "You collected Foggy!";
    }

}
}
    foggyButton.addEventListener("click", () => {

        if (wordCollected === false) {

            wordCollected = true;

           renderFoggy();
        } else {

            alreadyCollectedClicked = true;

           renderFoggy();

        }

        console.log("wordCollected:", wordCollected);

    });

}
