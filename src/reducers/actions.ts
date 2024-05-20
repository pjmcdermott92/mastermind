import { initialState } from '../utils';

export enum ActionTypes {
    SET_COLOR = 'SET_COLOR',
    RESET_ROW = 'RESET_ROW',
    CHECK_ROW = 'CHECK_ROW',
    NEW_GAME = 'NEW_GAME',
}

export const setColor = (bulbIndex: number) => {
    return {
        type: ActionTypes.SET_COLOR,
        payload: bulbIndex,
    };
};

export const resetRow = () => {
    return {
        type: ActionTypes.RESET_ROW,
        payload: Array.from({ length: 4 }, () => null),
    };
};

export const checkRow = () => {
    return {
        type: ActionTypes.CHECK_ROW,
        payload: null,
    };
};

export const statNewGame = () => {
    return {
        type: ActionTypes.NEW_GAME,
        payload: initialState(),
    };
};
