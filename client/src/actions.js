//try movie action
//if logic in the component
//reducer sets state equal to stuff from server
//new action for each variation of state

//guess where input is multiple words/has a space
export const MAKE_GUESS_WITH_SPACE = 'MAKE_GUESS_WITH_SPACE';
export const makeGuess = (guess) => ({
    type: MAKE_GUESS_WITH_SPACE,
    guess
});

//guess where input is all one word
export const MAKE_ONE_WORD_GUESS = 'MAKE_ONE_WORD_GUESS';
export const makeGuess = (guess) => ({
    type: MAKE_ONE_WORD_GUESS,
    guess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME
});

export const CHANGED_FIRST_LETTER = 'CHANGED_FIRST_LETTER';
export const changedFirstLetter = () => ({
    type: CHANGED_FIRST_LETTER
});

export const INPUT = 'INPUT';
export const input = (letter) => ({
    type: INPUT,
    letter
});
