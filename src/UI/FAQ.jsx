import React from 'react'
import { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";




const FAQ = ({question, answer}) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  return (
    <article className="faq" onClick={() =>setIsAnswerShowing(prev => !prev)}>
       <div>
      
        <h4>{question}</h4>
        <button className="faq__icon">
          {
            isAnswerShowing ? <FaMinusCircle/> :<FaPlusCircle/>
            }

        </button>
       </div>
       {isAnswerShowing && <p>
        {answer}
       </p>}
    </article>
  )
}

export default FAQ