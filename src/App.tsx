import { Directions } from './components/Directions';
import GameBoard from './components/GameBoard';
import GameOverlay from './components/GameOverlay';
import { ALLOWED_TRIES } from './constants';
import { GameProvider } from './contexts/GameProvider';

export default function App() {
    return (
        <GameProvider>
            <div className='container'>
                <h1>Mastermind</h1>
                <p>
                    The object of this game is to choose the correct color combination in the fewest
                    number of guesses possible. You will be given a maximum of {ALLOWED_TRIES}{' '}
                    attempts to choose the correct colors.
                </p>
                <div className='game-wrapper'>
                    <GameBoard />
                    <Directions />
                    <GameOverlay />
                </div>
                <p>
                    Designed and built by{' '}
                    <a
                        href='https://www.pjmcdermott.com/'
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        Patrick McDermott
                    </a>
                    .
                </p>
            </div>
        </GameProvider>
    );
}
