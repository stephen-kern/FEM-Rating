import React from 'react';
import Phone from '../../images/illustration-thank-you.svg'

const Feedback = ({ selectedRating }) => {
    return ( 
        <div className='feedback-container'>
            <img className='feedback-svg' alt='Phone illustration' src={Phone}/>
            <p className='user-feedback'>You selected {selectedRating} out of 5</p>
            <h1>Thank you!</h1>
            <p className='feedback-message'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
     );
}
 
export default Feedback;