import { COLORS } from '../constants';
import { useGameState } from '../contexts/GameProvider';
import { statNewGame } from '../reducers/actions';

export default function GameOverlay() {
    const { state, dispatch } = useGameState();
    const { isPlaying, isWin } = state;

    if (isPlaying) return null;

    return (
        <div className='game-overlay'>
            <h1>YOU {isWin ? 'WIN' : 'LOSE'}!!</h1>
            <RevealCode />
            <button onClick={() => dispatch(statNewGame())}>New Game</button>
        </div>
    );
}

function RevealCode() {
    const { state } = useGameState();

    return (
        <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0 3rem' }}>
            {Array.from({ length: 4 }, (_, idx) => (
                <div
                    key={idx}
                    style={{
                        width: '35px',
                        height: '35px',
                        background: COLORS[state.secretCode[idx]],
                        border: '2px solid white',
                        borderRadius: '100%',
                    }}
                />
            ))}
        </div>
    );
}
