# Milestone 2
Welcome to my second Milestone project:
In this project, I aim to build a memory game with a Dragon Ball theme.

The game consists of matching two identical cards. There are a total of 8 pairs to match, and once the player successfully matches all 8 pairs, an amazing image will be revealed in the background.

The player’s goal is to match all the cards using as few moves as possible — and of course, the game will be timed!

This game is a tribute to one of the greatest anime series of the 90's, an iconic symbol of my youth.

## User interactions
The player must flip cards to find matching pairs. Each flip is counted, and the total number of flips required to match all 8 pairs is tracked. On a computer, the player uses the mouse to click on the first card they wish to flip, then clicks on a second card. If the two cards match, they remain revealed, uncovering part of a larger image behind them. If they don’t match, both cards flip back to their original position.

Once the player matches all pairs, a congratulatory message will appear, showing the results of that round. The player can then choose to continue with a new match and keep accumulating points, or start a completely new game — in which case, all scores and results will be reset to zero.


### Dependencies and Credits

This project as a special meaning to me as the theme is from one of my favorite anime series from my youth back from the mid 90's.

This project was built using the following tools, resources, and inspirations:
-🛠 Technologies Used
HTML5 – for structuring the web page

CSS3 – for styling and responsive layout

JavaScript (ES6) – for game logic and interactivity

✅ Code Validation Tools
W3C HTML Validator – used to ensure proper HTML structure and semantic accuracy

W3C CSS Validator – used to validate and maintain clean, standards-compliant CSS

-🎨 Fonts & Styling
Google Fonts – Bangers – for the comic-style game typography

-🖼️ Images & Media
Dragon Ball Character Cards – fan art and images sourced for educational/demo purposes only. All rights belong to the original creators and copyright holders.

Background Image – selected to reflect the Dragon Ball anime aesthetic (credit to original artists when available).

-🧪 Development Tools
VS Code – main code editor

Live Server (Visual Studio Code extension) – for real-time preview and testing

Chrome DevTools – for debugging and responsive design testing

-📚 Inspiration
Inspired by the classic Memory Matching Game concept

Themed around Dragon Ball, as a tribute to the iconic anime series from the 1990s


## Bug problems and solutions

🐛 Bug Problems and Solutions
During the development of this Dragon Ball–themed memory card game, several design and functional challenges arose. Below is a summary of the key problems and how they were resolved:

1. Centering the Instructions Block
Problem: The instructions and game tips were not centered correctly on the screen.

Solution: Applied margin: 0 auto; and wrapped the content using inline-block inside a centered container. This ensured proper alignment across all screen sizes.

2. Background Overflow Around Text
Problem: The background color of the .instructions and <ul> elements extended far beyond the actual text width.

Solution: Used display: inline-block with proper padding and border-radius to ensure the background fit the text area neatly.

3. List Not Positioned Under Header
Problem: The unordered list appeared detached or misaligned from the “How to Play” header.

Solution: Grouped the heading and list within a container <div> using the .instructions-wrapper class to ensure correct vertical stacking.

4. Transparent Background Misconfiguration
Problem: Solid background colors obscured the main image.

Solution: Replaced solid black backgrounds with rgba(0, 0, 0, 0.8) to allow for semi-transparency while maintaining text readability.

5. Responsive Design on Mobile and Tablet
Problem: On small screens, content overflowed, and layout broke.

Solution: Implemented targeted media queries for devices under 600px and tablets between 600px–1024px. Adjusted font sizes, element widths, and spacing to create a smooth and responsive layout.

6. Navbar Styling Conflicts
Problem: Some layout changes unintentionally affected the navbar’s position and styling.

Solution: Scoped styling changes to exclude the .navbar class and preserved its original design and layout.

7. Grammar and Text Copy Issues
Problem: Instructional content included spelling and grammatical mistakes.

Solution: Proofread and rewrote the instructions for improved clarity, professionalism, and user understanding.




## Source for images and text

All images where taken from google search engine, from various public websites.
The images are in JPG format as showed better quality on the webpage.



🚀 Deployment Process
This project was developed and deployed using GitHub Pages. Below is a step-by-step outline of the deployment process.

✅ Repository Link
https://github.com/Wald13/Milestone2

📦 Deployment Steps
Clone the Repository Locally

git clone https://github.com/Wald13/Milestone2.git
cd Milestone2
Make Changes and Push

Make updates to your code locally.

Add, commit, and push changes:
git add .
git commit -m "Your commit message"
git push origin main
Enable GitHub Pages

Go to your repository on GitHub.

Click on Settings > Pages (from the sidebar).

Under Source, select the main branch and / (root) folder.

Click Save.

Access Your Live Site

After a few seconds, your project will be live at:

https://wald13.github.io/Milestone2/
🌐 Live Demo
Click here to view the live project:
https://wald13.github.io/Milestone2/


### Testing as a user for navigation purposes:
✅ Testing
User Navigation Testing
To ensure an intuitive and responsive user experience, the following manual tests were performed:

Navigation Bar

✅ Logo is centered and visible on all screen sizes.

✅ Links in the navbar are clickable and navigate correctly (e.g., “Home”, “Instructions”, “New Game”).

✅ Navbar remains fixed and styled properly across devices (desktop, tablet, phone).

How to Play Section

✅ The “How to Play” heading and instructions are clearly visible and centered.

✅ List of instructions is easily readable and appears right below the heading.

✅ Background of instructions maintains transparency and contrast for readability.

Game Functionality

✅ Clicking a card flips it.

✅ Matching two cards reveals a portion of the background image.

✅ Non-matching cards flip back.

✅ Score (flips) is tracked correctly.

✅ A modal appears when all cards are matched with results and options to start a new match or game.

Responsiveness

✅ Layout adjusts well for screen widths under 1024px (tablets) and 599px (phones).

✅ Content remains centered and legible on all screen sizes.

✅ No content overlaps or overflows.

Performance

✅ Game runs smoothly in Chrome, Firefox, Safari, and Edge.

✅ Background image loads correctly and remains fixed or scrolls as defined.

✅ No console errors during gameplay.

### Testing with validators:

