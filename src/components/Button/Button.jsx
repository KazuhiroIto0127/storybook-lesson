import './Button.css';
import PropTypes from 'prop-types';
import { useState } from 'react'

function Button({children, color = 'default', size = 'base', backgroundColor}){
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage('clicked');
    };
    return <button className={`${color} ${size}`}
                   style={backgroundColor && {backgroundColor}}
                   onClick={handleClick}>
                    {children} {message}
            </button>
}
export default Button;

Button.propTypes = {
    color: PropTypes.oneOf(['primary', 'default', 'danger']),
    size: PropTypes.oneOf(['sm', 'lg', 'base']),
    // onClick: PropTypes.func.isRequired,
}
