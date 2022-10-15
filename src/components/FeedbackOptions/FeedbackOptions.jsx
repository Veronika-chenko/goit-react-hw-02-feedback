import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handleClick }) => {
    return (
        <>
            {options.map((option) => (
                <button
                    key={option}
                    type="button"
                    name={option}
                    onClick={handleClick}>{option}
                </button>
            )
            )}
        </>
    )
};

FeedbackOptions.prototype = {
    options: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
};