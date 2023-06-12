import React from 'react';
import Star from '../../images/icon-star.svg';


const Rating = () => {
    return (  
        <div className='rating-container'>
            <img alt='star icon' src={Star}/>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            {/* maybe separate the numers into their own compnent? */}
            <button type='submit'>SUBMIT</button>
        </div>
    );
}
 
export default Rating;