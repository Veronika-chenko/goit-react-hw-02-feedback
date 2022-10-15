import PropTypes from 'prop-types';
import { NotifText } from './Notification.styled';

export const Notification = ({ message }) => {
    return (
        <NotifText>{message}</NotifText>
    )
}

Notification.prototype = {
    message: PropTypes.string.isRequired,
}