import PropTypes from 'prop-types';
import { ButtonWrap, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonWrap>
            {options.map((option) => (
                <Button
                    key={option}
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}>{option}
                </Button>
            )
            )}
        </ButtonWrap>
    )
};

FeedbackOptions.prototype = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};