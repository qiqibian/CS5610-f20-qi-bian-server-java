import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

export const LessonTabs = function() {
  return (
    <div className={'lesson-tabs'}>
      <div className={'lesson-title'}>
        <AiOutlineClose />
        <span>CS5610-WebDev</span>
      </div>
      <div className={'lesson-tab-list'}>
        <div className={'lesson-tab'}>Lesson 1</div>
        <div className={['lesson-tab', 'active'].join(' ')}>Lesson 2</div>
        <div className={'lesson-tab'}>Lesson 3</div>
        <div className={'lesson-tab'}>Lesson 4</div>
        <div className={'lesson-tab'}>Lesson 5</div>
      </div>
      <div>
        <FaPlus />
      </div>
    </div>
  )
}
