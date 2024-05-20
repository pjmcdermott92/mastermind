import { ALLOWED_TRIES, COLORS } from './constants';
import { GameState } from './contexts/GameProvider';

export const initialState = (): GameState => ({
    currentRow: 0,
    rows: Array.from({ length: ALLOWED_TRIES }, () => [null, null, null, null]),
    hints: Array.from({ length: ALLOWED_TRIES }, () => [null, null, null]),
    secretCode: Array.from({ length: 4 }, () => Math.floor(Math.random() * COLORS.length)),
    isPlaying: true,
    isWin: false,
});

export function getHints(secret: number[], currentValue: number[] | null[]) {
    const secretCode = [...secret];
    const currentGuess = [...currentValue];
    const hints: string[] = [];

    for (let i = secret.length - 1; i >= 0; i--) {
        if (secretCode[i] == currentGuess[i]) {
            hints.push('red');
            secretCode.splice(i, 1);
            currentGuess.splice(i, 1);
        }
    }

    for (let i = secretCode.length - 1; i >= 0; i--) {
        const j = currentGuess.indexOf(secretCode[i]);
        if (j !== -1) {
            hints.push('white');
            secretCode.splice(i, 1);
            currentGuess.splice(j, 1);
        }
    }

    return new Array(4).fill('').map((_, idx) => hints[idx] || null);
}

