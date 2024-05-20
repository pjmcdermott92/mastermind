import { MdClear, MdRestartAlt, MdQuestionMark } from 'react-icons/md';
import { useGameState } from '../contexts/GameProvider';
import { checkRow, resetRow, statNewGame } from '../reducers/actions';

export default function ActionButtons() {
    const { dispatch } = useGameState();

    const handleClickNewGame = () => {
        const restart = confirm('Are you sure you want to restart the game?');
        if (!restart) return;

        dispatch(statNewGame());
    };

    return (
        <div className='action-buttons'>
            <button onClick={() => dispatch(resetRow())}>
                <MdClear style={{ fontSize: '2rem' }} />
                Reset Row
            </button>
            <button onClick={() => dispatch(checkRow())}>
                <MdQuestionMark style={{ fontSize: '2rem' }} />
                Check Guess
            </button>
            <button onClick={handleClickNewGame}>
                <MdRestartAlt style={{ fontSize: '2rem' }} />
                New Game
            </button>
        </div>
    );
}
