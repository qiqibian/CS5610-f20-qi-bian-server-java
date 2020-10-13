import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

export const ModuleList = function() {
  const modules = ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5'];
  return (
    <div className={'module-list'}>
      {
        modules.map((module, index) =>
          <div className={['module-item', index === 1 ? 'active': ''].join(' ')}>
            <span className={'module-name'}>{ module }</span>
            <AiOutlineClose />
          </div>
        )
      }
      <div style={{ textAlign: 'right', padding: 25 }}><FaPlus /></div>
    </div>
  )
}
