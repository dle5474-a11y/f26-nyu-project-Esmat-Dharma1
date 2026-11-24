# Wordfall

**Latest mockups:** https://www.figma.com/design/GRxZ0VxuXMWeqFewEfSPhx/DharmaEsmat_Assignment4_Mockups.pdf?node-id=0-1&t=taWvDZ1c32jbhtnM-1
**Live site:** https://special-palm-tree-775prq97wg953xp4j-5500.app.github.dev/

USER STORY AUDIT

MAIN STORY:

Criterion 1: The player can read the story in short sections rather than seeing a large amount of text at once.
  Status ✅ 
  Notes: speach bubble allows to read texts in chunks 

Criterion 2: The player is given at least two choices at specific points in the story.
  Status  🟡
  Notes: Modified to player techinicaly has at least three choices 

Criterion 3: When the player selects a choice, the story changes based on their decision.
  Status ❌ 
  Notes: needs to be developed more 
  

USER TEST NOTES (filled in by the maker)
Maker: Dharma Esmat
Tester:

Who the user is (one sentence): Middle-school students, particularly around 6th grade, with dyslexia who may find reading challenging or frustrating.

Task 1 (full main story):
  Completed?  Yes / With trouble / No
  Where they hesitated or got stuck:
  What they said they expected:

Task 2:
  Completed?  Yes / With trouble / No
  Where they hesitated or got stuck:
  What they said they expected:

Task 3 (optional):
  Completed?  Yes / With trouble / No
  Where they hesitated or got stuck:
  What they said they expected:

Tester's one-line takeaway (ask them at the end):
"The one thing I'd fix first is..."
## Project Log
### Week 10 — [11/22/26]
**Event Plan**
- **User story:** As a middle-school student with dyslexia, I want to search through my collected vocabulary words and their definitions so that I can easily find and review words I have discovered while playing Wordfall.
- **The event:**  I will use an input event on a search bar on the Word Collection page. This event fits because players can search for words as they type, without needing to press a separate search button.
- **State:** I will create a new state variable called searchText, which starts as an empty string (""). This variable will remember what the player types into the search bar. I will also keep my existing Week 9 state for collecting words.
- **My function:** I will create a function called matchesSearch(word) that answers the question: “Does this word’s name or definition contain the player’s search text?” The function takes a vocabulary word object as its parameter and returns true if it matches or false if it does not.

**What changed:** This week, I added a search bar to my Word Collection page that allows players to search for vocabulary words using either their names or definitions. I used an input event to detect what the player types and stored that information in a new state variable called searchText. I also created a function called matchesSearch(word) that checks whether a word matches the search. The render() function now uses this function to display only matching vocabulary words. If no words match, the page displays a message encouraging the player to try another search.
**Why redraw on every event:** I call render() every time the player types because the vocabulary collection needs to update based on the current search. Instead of having the event handler directly change the HTML, it updates searchText, and render() decides which vocabulary words should appear. This keeps the interaction organized and makes sure the page reflects the current state.
**What was hard, and what I tried:** One challenge was understanding how the search event connected to my existing render() function. I also had trouble with an extra closing bracket when adding the if statement inside my vocabulary loop, which caused errors in my code. I went back through the brackets to understand which ones belonged to the function, loop, and conditional statement. 
**What happened when I tried to break it:** When I first opened the page, all five vocabulary words appeared. Searching for “fog” displayed only Foggy, and searching for “mist” also displayed Foggy because its definition contains that word. Searching with capital letters, such as “FOG,” worked correctly. I initially thought searching with extra spaces was broken, but I discovered that .trim() removes spaces at the beginning and end of a search, not between letters. Searching for “xyz” displayed the no-results message, and clearing the search restored all five words. I also tested clicking a word after filtering, and its definition appeared correctly. When I changed the search to another word, the previous definition disappeared.
**What I learned or changed my mind about:** I learned more about how events, state, and render() work together. I also better understand how a function can take a parameter and return true or false to help make decisions inside render(). Originally, I was considering adding an interaction with the cat or allowing players to choose missing words for dialogue. However, I decided to focus on the vocabulary search first because it helped me better understand the JavaScript concepts before developing more complicated gameplay interactions.
**Question for Joey:** no specifc questions just any feedback is appreciated.
**Next week's goal:** My next goal is to develop the interaction with the cat on the Choose Word page. I want players to click the cat to open a speech bubble containing dialogue and clues. Eventually, players will be able to choose words from their collection to complete missing dialogue and progress through the story. will most likely start this tomorrow.
**AI use:** I used AI to help troubleshoot bracket errors and understand how .trim() and .toLowerCase() work. I tested the code myself in Live Server and used the browser Console to check the function’s results.

Additional Interaction — Kirbs’s Dialogue (November 22, 2026)

I added an interactive dialogue feature to the Meet NPC page. Players can now click Kirbs the cat to reveal his dialogue and click again to hide it.

I used a catSpeaking state variable and a renderCat() function to control whether the dialogue appears. This follows the same state → render pattern I learned in Assignment 9.

I tested the interaction by clicking the cat ten times, refreshing the page, and checking that the original Foggy collection interaction still worked. All three tests passed without any issues.

I also added accessibility attributes to the cat button so its expanded state updates when the dialogue opens or closes.

### Week 9 — [11/15/26]

**Render Plan**
- **User story:** As a middle-school student with dyslexia, I want to use information I discover while reading so that I can interact with the story and improve my reading comprehension.
- **State:** The page remembers which vocabulary word the player has selected using selectedWord. It starts as null, meaning no word is selected.
- **What changes it:** Clicking a vocabulary button changes selectedWord to that word’s name.
- **What render() draws:** The function loops through my existing words array and displays the five vocabulary buttons and the selected word’s definition.
- **The if inside the loop:** It checks whether each word matches selectedWord. If it matches, that button receives a selected style.
- **What else render() works out:** The definition panel updates to show the selected word’s name, pronunciation, category, and definition.
**What changed:** I reorganized my Word Collection interaction using a render() function. Instead of having the click handler directly update the definition panel, it now changes the selected word, and render() updates the vocabulary buttons and definition. I also added a dark green highlight to show which word is currently selected.
**Patching vs. rendering:** Previously, my click handler directly changed the HTML whenever a player selected a vocabulary word. Now, the click handler only updates selectedWord and calls render(), which redraws the vocabulary buttons and definition based on the current state. This makes the interaction more consistent and prevents duplicate information from appearing.
**What was hard, and what I tried:** One challenge was getting the selected vocabulary button to change color. My existing CSS rule for the inventory buttons was overriding the new selected style. I fixed this by using a more specific CSS selector, #content-container button.selected, while keeping my original color palette.
**What happened when I tried to break it:** I tested the starting state, clicked different vocabulary words, clicked Broken ten times, and selected words in an unexpected order. The selected button continued to highlight correctly, and the definition panel displayed the corresponding word without duplicating information. The interaction remained consistent throughout testing.
**What I learned or changed my mind about:** I originally planned to add a collection progress counter, but I realized that improving my existing vocabulary selection interaction would be more useful. I learned that using state and render() can make an interaction more organized without needing to add unnecessary visual features. eventually also using localstorage
**Question for Joey:** Could I have used the cat npc interaction for this assighement I saw your notes for me last week but my cat directly does not involve assighement 6 like the directions say. 
**Next week's goal:** updating cat speach bubble and having the CSS be changed where the speach bubble is closer to the cat
**AI use: I used ChatGPT to help me troubleshoot CSS problems. 

### Week 8 — [11/8/26]

**State Plan**
- **User story:** 
     As a middle school student with dyslexia, I want to interact with words I discover while exploring so that I can collect them and use them to progress through the story.
- **What does the page remember?** 
     Whether the player has collected the missing word.
- **What does it start at?**
        The word starts as not collected (false).
- **What changes it?**
    When the player clicks the button to collect the word, the state changes from false to true.
- **What does the user see?**
     Once the player collects the word, it appears in their Word Collection, and a message confirms that the word has been collected. user will also see a change of the screens inviorment 
- **What does the `if/else` decide?** 
        It checks whether the word has already been collected. If it hasn’t, the player can collect it. If it has, the game tells the player they already have that word.

**What changed:**
  I added JavaScript state to make Wordfall more interactive. Players can now click on the word “Foggy” when they meet the NPC, and the game remembers that the word has been collected. I used a Boolean variable and an if/else statement to change the button’s text and display different messages depending on whether the player has already collected the word.
**What was hard, and what I tried:**
One challenge was figuring out how to connect my JavaScript to different HTML pages without breaking my existing Word Collection. At first, I realized that my script was only connected to the Word Collection page and not the NPC page I added the script connection and used an if statement to make sure the Word Collection code only runs when the necessary HTML elements exist.
**What happened when I tried to break it:**
I tested my word-collection interaction at three different points: before collecting the word, after collecting it once, and after clicking it repeatedly. The starting state worked correctly, with Foggy appearing as an uncollected word. After clicking it, the button changed to “Foggy Collected,” and the page displayed a confirmation message.

When I clicked the button multiple times, the game recognized that Foggy had already been collected and displayed a different message. This prevented the interaction from counting the same word multiple times.

One limitation I identified was that the collected state resets when the player refreshes or leaves the page. The Word Collection inventory also doesn’t yet reflect the player’s action. I would like to address this in a future iteration so that collected words remain available as players progress through the story. also the collected message appears near the top of the screen rather then underneath the button
**What I learned or changed my mind about:**
its makes it more compplicated to make interaction when you have many html files and making sure everything is effected by the one interaction 
**Question for Joey:**
just inntitial thoughts on what I can refine 
**Next week's goal:**
I want to add a interaction where when you click on the cat the speach bubble pops up
**AI use:**
I used ChatGPT to help me with grammatical and spelling errors and also used it to help me trouble shoot codes that are not working 



## **Instructions**

### **Step-by-Step: Getting Set Up**


**1\. Click the green "Use this template" button**

This creates a brand new repository under your own GitHub account, pre-loaded with the starting files.

**2\. Name your repository**

Use this naming convention:

`nyu-f26-lastname-firstname`

**3\. Click "Create repository from template"**

GitHub copies the files and takes you to your new repo page.

**4\. Click the green "Code" button → "Create Codespace"**

**5\. Wait about 15 minutes while it boots up**

This is normal. Codespaces is spinning up a virtual computer for you in the cloud, installing dependencies, and opening VS Code in your browser. Grab a sip of water while it loads.

**6\. You're ready**

When the browser tab opens to VS Code, open the `style.css` file in the file explorer on the left. The base styles are already written for you, and each rule has **STEP** comments showing where the grid properties go. That's your starting point — we'll type the grid code together in class, one step at a time.

---

## **GitHub Codespaces — A Brief Guide**

### **What Is It?**

Codespaces is a development environment that runs entirely in your browser. Instead of installing software on your own computer, you get a virtual computer in the cloud — pre-configured and ready to code — that you access through a web browser. Microsoft (which owns GitHub) hosts it.

### **What It Saves Us From**

Normally, getting a development environment set up requires installing and configuring a bunch of tools:

* A code editor (VS Code)  
* A terminal (command line)  
* Git (version control)  
* Node.js, Python, or whatever runtime the project needs  
* Extensions, themes, settings

Each one of these can break in unique ways depending on your operating system, your computer's permissions, or just bad luck. **Codespaces eliminates all of that.** You click one button and you're in a fully working environment. No "it works on my machine" problems.

### **How It Works (High Level)**

1. A project lives in a GitHub repository.  
2. You click the green **Code** button and select **Open with Codespaces**.  
3. GitHub spins up a lightweight virtual machine running Linux, installs the project's dependencies automatically, and opens a browser-based version of VS Code.  
4. You code, save, and commit just like you would on your local machine.  
5. When you're done, you stop the Codespace. Next time you come back, everything is exactly where you left it.

The environment is defined by a file called `devcontainer.json` (or `.devcontainer/`) in the repository. It's like a recipe that tells GitHub "this project needs X, Y, and Z."

### **The Catch: It's Slow to Start (And Why)**

A cold start takes **1–3 minutes**. Here's why:

* **A new virtual machine has to boot.** Codespaces isn't "running" until you open it. There's no always-on computer — one is created for you on demand. That means spinning up an OS from scratch.  
* **Your dependencies install.** If the project requires packages or libraries, Codespaces runs the install process when it starts. This is the same `npm install` or `pip install` you'd run locally — it just happens automatically.  
* **Extensions and settings sync.** VS Code loads your extensions, themes, and preferences from your GitHub account.

**Once it's running, it's fast.** The delay is only on the first launch of the day (or after you've manually stopped the Codespace). If you keep it open between sessions, there's no wait.

### **Tips**

* **Don't close your Codespace mid-session.** Just leave the tab open. If you close it, stop the Codespace from the GitHub dashboard so it doesn't eat into your monthly usage hours.  
* **Your work is saved automatically.** Even if the Codespace stops, the files are stored on GitHub. You won't lose anything.  
* **You get a fixed number of free hours per month** through the GitHub Student Developer Pack. A cold start uses some of those hours just booting up, so it's worth keeping one Codespace alive while you're actively working.  
* **If you need to work offline,** you can always install VS Code and Git locally instead but it does take some set up — Codespaces is a convenience, not a requirement.

## Assignment 6 — Dynamic Word Collection

For this assignment, I used JavaScript to dynamically generate the word inventory for my Wordfall game.

### Data
I created an array of five word objects: Foggy, Broken, Dark, Hidden, and Glowing. Each object contains a name, definition, and category.

### JavaScript Implementation
I used a forEach() loop to go through the array and document.createElement() to create a button for each word. I then used textContent to display the word's name and appendChild() to add the buttons to the inventory container in my HTML.

### Challenges
One challenge was changing my original inventory from manually written HTML buttons to JavaScript-generated buttons. I needed to remove the original buttons and create an empty container so JavaScript could populate it. overall it was a lot of confusion having to go back anf fourth

## Structure Audit — [10/30/26]

**Fixed today:**
- Updated the font to actualy be veiwed on the page 
- took my imported fonts to the top of my CSS

**Still missing (building before the layout assignment):**
- [ differentiating links vs buttons and updating that to correctly link to different pages] 
- [ making sure to use my varibales everywhere] 

**One thing I couldn't figure out:**
- before submitting assighemnt 5 I was having a hard time figuring out why my fonts were not working thanks for professor i was able to make that change. Also understnading the differences between buttons and links I always thought they go hand to hand
That list is the first thing I'll look at when I grade your next assignment. It's also the first thing you should look at when you sit down to work.
### Figma Mockup

[View my Wordfall Figma Mockup](https://www.figma.com/design/GRxZ0VxuXMWeqFewEfSPhx/DharmaEsmat_Assignment4_Mockups.pdf?node-id=0-1&t=yodpgYZJKVolfCM2-1)

### Weekly Update

What I plan to work on next week:

Next week, I want to focus on making Wordfall more interactive. Now that my Word Collection can display vocabulary words and their definitions using JavaScript, I want to explore how players can use those words to interact with NPCs and progress through the story. I also want to improve the positioning of my images so the game environment looks closer to my original Figma mockup.

Questions I have:

One question I have is how to connect the words players collect in their inventory to the dialogue choices they make when interacting with NPCs. I am also wondering how I can make the environment change based on those interactions. 

### Reflection for Assignment 7
When comparing my original Figma mockup to my current website, I noticed a few differences in the layout. One intentional change I made was expanding the word-selection panel across the bottom of the screen. I preferred this version because the word choices are clearer, easier to read, and easier for players to select.

Another difference I noticed was the placement of the NPC’s dialogue bubble. In my original mockup, the dialogue bubble was positioned closer to the character, while in my current website, it appears farther away. This is something I would like to improve as I continue working on the responsive layout.


