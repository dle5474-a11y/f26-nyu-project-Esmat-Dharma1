# [Wordfall]

**Latest mockups:** [link]
**Live site:** [link, once published]

## Project Log
Week 8 — November 8, 2026

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