import { Dispatch, createContext, useContext, useReducer } from 'react';
import { initialState } from '../utils';
import { GameReducerAction, gameReducer } from '../reducers/gameReducer';

export interface GameState {
    currentRow: number;
    rows: null[][];
    hints: null[][];
    secretCode: number[];
    isPlaying: boolean;
    isWin: boolean;
}

type GameContext = {
    state: GameState;
    dispatch: Dispatch<GameReducerAction>;
};

export const GameContext = createContext<GameContext>({
    state: initialState(),
    dispatch: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useGameState = () => useContext(GameContext);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
    //@ts-expect-error-error
    const [state, dispatch] = useReducer(gameReducer, initialState());

    return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
};
