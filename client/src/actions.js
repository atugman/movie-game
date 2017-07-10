//try movie action
//if logic in the component
//reducer sets state equal to stuff from server
//new action for each variation of state

//guess where input is multiple words/has a space
export const MAKE_MULTI_WORD_GUESS = 'MAKE_MULTI_WORD_GUESS';
export const makeMultiWordGuess = (guess) => ({
    type: MAKE_MULTI_WORD_GUESS,
    guess
});

//guess where input is all one word
export const MAKE_ONE_WORD_GUESS = 'MAKE_ONE_WORD_GUESS';
export const makeOneWordGuess = (guess) => ({
    type: MAKE_ONE_WORD_GUESS,
    guess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME
});

export const CHANGE_FIRST_LETTER = 'CHANGE_FIRST_LETTER';
export const changeFirstLetter = () => ({
    type: CHANGE_FIRST_LETTER
});

export const INPUT = 'INPUT';
export const input = (letter) => ({
    type: INPUT,
    letter
});
