# The Movie Game

Creating The Movie Game was a concerted effort to bring to life a popular family road trip game.

The game allows users to explore different movies while testing their knowledge of movie titles.

## How it's made

I created The Movie Game using React, Redux and jQuery on the client side.

I used Node.js and Express on the server side.

I used MongoDB as the database and Passport.js for authentication. 

## How to play

The object of the game is to think of as many movies as possible, and type them submit them into the form 1 by 1 to increase their score.

Users must first create an account and log in, as their score will be saved to their user profile.

After logging in, users are redirected to the game page where they can start to guess movies.

The movie titles that are submitted must start with a particular letter that is based on the previous movie guessed.

If the previously guessed movie title is multiple words, the next letter will be the first letter of the last word of the movie.

If the previously guessed movie title is a single word, the next letter will be the last letter of the single word.

For instance, if a user guesses "Fight Club," the next movie that they guess will have to start with "C."

And if a user guesses "Aladdin," the next movie that they guess will have to start with "N."

Users cannot use the word "the," as that would be too easy. If a user wanted to submit the movie "The Shining," they could simply type in "Shining," assuming the letter they are required to start with is "S."

Users will be able to compete for the top score by keeping up with the leaderboard presented in the app.

## Closing thoughts

The Movie Game brings a big part of my childhood to life - my family always played this game to keep ourselves entertained on road trips. I hope you enjoy it!
