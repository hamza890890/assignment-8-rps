## CSC372 Web Development (See at the very end of this ReadMe File to the link to the demo of this assignment)
Assignment 8 Rock Paper Scissors X React

This project is a React-based version of the Rock Paper Scissors game created for CSC372 Web Development. The app allows a user to play against the computer through an interactive React interface built with components, state, and event handling.

# Features

Player Throw: Displays clickable images for rock, paper, and scissors. The selected image is highlighted.

Computer Throw: Initially shows a question mark. After the player selects, it animates through all three options before revealing the computer’s final throw.

Outcome Display: Shows whether the player wins, loses, or ties.

ScoreBoard: Tracks wins, losses, and ties across rounds.

Reset Button: Clears the score and resets the game state.

# Component Structure

App: Root component managing game state and logic.

PlayerThrow: Displays throw options and handles player selection.

ComputerThrow: Animates and reveals the computer’s choice.

ResultDisplay: Shows the result of each round.

ScoreBoard: Displays total wins, losses, and ties.

ResetButton: Resets game state and score.

All images are stored in the public/images folder and accessed using relative paths.

# Technical Details

Built with React using functional components and hooks (useState, useEffect).

Uses modular CSS or external stylesheets, not inline styles.

Follows semantic HTML and accessibility guidelines.

Handles all nine possible throw combinations.

Passes W3C validation and React coding standards.

Reflection

This project strengthened understanding of React fundamentals including component composition, state management, and event-driven logic. Implementing the animation and scoreboard enhanced practical skills in managing asynchronous updates and shared state across multiple components.


# Setup (local)
1. Ensure Node.js (16+) and npm are installed.
2. Clone your GitHub repo:
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
3. Install and run:
   ```bash
   npm install
   npm run dev
4. Open the URL printed by Vite (usually http://localhost:5173).

# Demo Video:
