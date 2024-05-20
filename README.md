# Mastermind Game

## May 2024

![A screenshot of the Mastermind game](/screenshot.png)

Mastermind is a code-breaking game that was invented in Israel. The board game is typically a two-player game - in which one player chooses a secret code comprised of four colored bulbs, and the second player tried to guess the code.

This is my version of the game - built in ReactJS with TypeScript. In this game, the player plays against the computer, and has 12 attempts to guess the correct four-color code. Each of the four bulbs can be one of 8 different colors, and the code can repeat the same color multiple times.

After the player has made their guess, they will click on the "Check Guess" button at the bottom of the board. The computer will then provide the player feedback about their guess with the four smaller bulbs to the right of the player's guess. THe feedback will follow these instructions:

-   Each white bulb means that one of the player's colors is correct, but is in the wrong place.
-   Each red bulb means that one of the player's chosen colors is correct AND in the correct place.
-   THe order of the pegs does not matter; they do not indicate the order of the computer's "secret code".

If the player guesses correctly, the game will end, and a message will pop up letting the player know that they won, and will reveal the secret code. The player can then click the "New Game" button to play again.

If the player does not guess correctly within the 12 guesses, a message will pop up letting the user know that they have lost, and the secret code will be revealed. The user can then click the "New Game" button to play again.

If the user wants to clear their current guess and start again, they can click on the "Reset Row" button at the bottom of the board.

If the player wants to end the current game early and start a new game, they can click on the "New Game" button at the bottom of the board.

### Tech Stack

This game is built in React, and uses four of React's built-in hooks:

-   useState()
-   useReducer()
-   createContext()
-   useContext()

The global game state is managed through a reducer.
