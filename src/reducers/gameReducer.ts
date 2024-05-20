import { COLORS } from '../constants';
import { GameState } from '../contexts/GameProvider';
import { getHints } from '../utils';
import { ActionTypes } from './actions';

export type GameReducerAction = {
    type: ActionTypes;
    payload: unknown;
};

export const gameReducer = (state: GameState, action: GameReducerAction) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.SET_COLOR: {
            const currentColorIdx = state.rows[state.currentRow][payload as number];

            if (currentColorIdx == null || currentColorIdx == COLORS.length - 1) {
                const newState = { ...state };

                newState.rows[state.currentRow][payload as keyof typeof state] = 0;
                return newState;
            } else {
                const newState = { ...state };
                newState.rows[state.currentRow][payload as keyof typeof state] =
                    currentColorIdx + 1;
                return newState;
            }
        }
        case ActionTypes.RESET_ROW: {
            const newState = { ...state };
            newState.rows[state.currentRow] = payload as null[];
            return newState;
        }
        case ActionTypes.CHECK_ROW: {
            const secret = state.secretCode;
            const currentValue = state.rows[state.currentRow];

            for (let i = 0; i < currentValue.length; i++) {
                if (currentValue[i] == null) return state;
            }

            const isWin = secret.every((val: number, idx: number) => val == currentValue[idx]);

            if (isWin) {
                return {
                    ...state,
                    isPlaying: false,
                    isWin: true,
                };
            }

            if (state.currentRow == state.rows.length - 1) {
                return {
                    ...state,
                    isPlaying: false,
                    isWin: false,
                };
            }

            const hints = getHints(state.secretCode, state.rows[state.currentRow]);

            const newState = { ...state };
            newState.currentRow++;
            //@ts-expect-error assign hints array; it works fine
            newState.hints[state.currentRow] = hints;

            return newState;
        }
        case ActionTypes.NEW_GAME: {
            return payload;
        }
        default: {
            return state;
        }
    }
};
