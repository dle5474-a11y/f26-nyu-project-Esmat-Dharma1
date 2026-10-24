// Wordfall Word Collection Data

const words = [

    {

        name: "Foggy",

        definition: "Weather filled with thick mist.",

        category: "Weather"

    },

    {

        name: "Broken",

        definition: "Something that is damaged or no longer working.",

        category: "Condition"

    },

    {

        name: "Dark",

        definition: "Having little or no light.",

        category: "Environment"

    },

    {

        name: "Hidden",

        definition: "Something that cannot easily be seen.",

        category: "Discovery"

    },

    {

        name: "Glowing",

        definition: "Producing a soft light.",

        category: "Environment"

    }

];
// Find the inventory container in HTML

const container = document.getElementById("content-container");

// Go through each word in the array

words.forEach(word => {

    // Create a button

    const button = document.createElement("button");

    // Put the word's name inside the button

    button.textContent = word.name;

    // Add the button to the inventory

    container.appendChild(button);

});