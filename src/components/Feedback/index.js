import React from 'react';
import Phone from '../../images/illustration-thank-you.svg'

const Feedback = () => {
    return ( 
        <div>
            <img alt='Phone illustration' src={Phone}/>
            <span>You selected x out of x</span>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
     );
}
 
export default Feedback;