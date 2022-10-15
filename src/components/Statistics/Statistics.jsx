import PropTypes from 'prop-types';
import { StateList, StateItem } from './Statistics.styled';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => {
    return (
        <StateList>
            <StateItem>Good: {good}</StateItem>
            <StateItem>Neutral: {neutral}</StateItem>
            <StateItem>Bad: {bad}</StateItem>
            <StateItem>Total: {total}</StateItem>
            <StateItem>Positive feedback: {positivePercentage}%</StateItem>
        </StateList>
    )
};

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};