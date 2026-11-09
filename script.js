console.log("script.js is connected");
// wordCollected: remembers whether the player has collected the missing word to restore the story
let wordCollected = false;

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

// Go through each word in the array
if (container && definitionContainer) {

words.forEach(word => {

    // Create a button for each word
    const button = document.createElement("button");

    // Display the word's name
    button.textContent = word.name;

    // When the player clicks the button
    button.addEventListener("click", () => {

        // Clear the previous definition
        definitionContainer.innerHTML = "";

        // Create elements for the word information
        const name = document.createElement("h3");
        const pronunciation = document.createElement("p");
        const category = document.createElement("p");
        const definition = document.createElement("p");

        // Add information from the array
        name.textContent = word.name;
        pronunciation.textContent = "Pronunciation: " + word.pronunciation;
        category.textContent = "Category: " + word.category;
        definition.textContent = word.definition;

        // Display the information in the definition box
definitionContainer.appendChild(definition);
definitionContainer.appendChild(name);
definitionContainer.appendChild(pronunciation);
definitionContainer.appendChild(category);

    });

    // Add the button to the inventory
    container.appendChild(button);

});
}
// Find the Foggy button and collection message
const foggyButton = document.getElementById("collect-foggy");
const collectionMessage = document.getElementById("collection-message");

if (foggyButton && collectionMessage) {

    foggyButton.addEventListener("click", () => {

        if (wordCollected === false) {

            wordCollected = true;

            foggyButton.textContent = "✓ Foggy Collected";
            collectionMessage.textContent = "You collected Foggy!";

        } else {

            collectionMessage.textContent = "You already collected Foggy!";

        }

        console.log("wordCollected:", wordCollected);

    });

}