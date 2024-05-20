import { ALLOWED_TRIES } from '../constants';
import ActionButtons from './ActionButtons';
import GuessRow from './GuessRow';

export default function GameBoard() {
    return (
        <div className='game-container'>
            <div className='game-board'>
                {Array.from({ length: ALLOWED_TRIES }, (_, idx) => (
                    <GuessRow key={idx} rowNumber={idx} />
                ))}
            </div>
            <ActionButtons />
        </div>
    );
}
