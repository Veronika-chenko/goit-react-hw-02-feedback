import PropTypes from 'prop-types';
import { ButtonWrap, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleClick }) => {
    return (
        <ButtonWrap>
            {options.map((option) => (
                <Button
                    key={option}
                    type="button"
                    name={option}
                    onClick={handleClick}>{option}
                </Button>
            )
            )}
        </ButtonWrap>
    )
};

FeedbackOptions.prototype = {
    options: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
};