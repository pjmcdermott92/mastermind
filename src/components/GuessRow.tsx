import { COLORS } from '../constants';
import { useGameState } from '../contexts/GameProvider';
import { setColor } from '../reducers/actions';

type GuessRowProps = {
    rowNumber: number;
};

export default function GuessRow({ rowNumber }: GuessRowProps) {
    const { state, dispatch } = useGameState();
    const rowIsDisabled = state.currentRow !== rowNumber;

    const handleClickColor = (bulbIndex: number) => dispatch(setColor(bulbIndex));

    return (
        <div
            className='guess-row'
            style={{
                opacity: rowIsDisabled ? '.45' : '1',
                pointerEvents: rowIsDisabled ? 'none' : 'auto',
            }}
        >
            {Array.from({ length: 4 }, (_, idx) => (
                <GuessItem
                    key={idx}
                    value={state.rows[rowNumber][idx]}
                    onClickBulb={() => handleClickColor(idx)}
                />
            ))}
            <div className='guess-row__result'>
                {Array.from({ length: 4 }, (_, idx) => (
                    <div
                        className='guess-row__result--item'
                        key={idx}
                        style={{
                            background: state.hints[rowNumber][idx]!,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

type GuessItemProps = {
    value: number | null;
    onClickBulb: () => void;
};

function GuessItem({ value, onClickBulb }: GuessItemProps) {
    return (
        <div
            className='guess-row__item'
            onClick={onClickBulb}
            style={{ background: value !== null ? COLORS[value] : '' }}
        />
    );
}
