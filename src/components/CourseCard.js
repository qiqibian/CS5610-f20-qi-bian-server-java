import React from 'react';
import { AiFillProfile } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

export const CourseCard = function(props) {
  const { title, content, modified } = props.course

  return (
    <div className='card'>
      <div className='content'>{ content }</div>
      <div className='bottom'>
        <div className='title'>{ title }</div>
        <div className='modified'>
          <AiFillProfile style={{ color: '#327CF7'}} />
          <BsFillPeopleFill />
          <span>Modified</span>
          <span>{ modified }</span>
        </div>
      </div>
    </div>
  )
}
