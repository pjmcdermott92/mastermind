import { ALLOWED_TRIES } from '../constants';

export function Directions() {
    return (
        <div className='directions-container'>
            <p>
                <strong>INSTRUCTIONS</strong>
            </p>
            <ul>
                <li>
                    Click on a "bulb" to change the displayed color. There are a total of 8 colors
                    to choose from.
                </li>
                <li>Colors CAN be repeated in the combination.</li>
                <li>
                    Once you are ready to check your combination, click on the "Check Combination"
                    button to see how well you did.
                </li>
                <li>
                    The four smaller bulbs to the right of the combination will provide you with
                    feedback.
                </li>
                <li>
                    For each color that is in the combination, but that is in the INCORRECT spot,
                    you will see a{' '}
                    <span style={{ padding: '.25rem', color: 'white', background: 'black' }}>
                        white
                    </span>{' '}
                    dot.
                </li>
                <li>
                    For each color that is in the combination AND that you put a correct location,
                    you will see a{' '}
                    <span style={{ padding: '.25rem', color: 'red', background: 'black' }}>
                        red
                    </span>{' '}
                    dot.
                </li>
                <li>
                    There is no order to the smaller bulbs - they just indicate the total number of
                    colors you have in the combination, or in the correct spot.
                </li>
                <li>
                    You have up to {ALLOWED_TRIES} chances to guess the correct color combination.
                </li>
                <li>GOOD LUCK!</li>
            </ul>
        </div>
    );
}
