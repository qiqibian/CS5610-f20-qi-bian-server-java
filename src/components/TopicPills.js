import React from 'react'
import { FaPlus } from "react-icons/fa";

export const TopicPills = function() {
  return (
    <div className={'topic-pills'}>
      <div className={'topic'}>Active</div>
      <div className={'topic'}>Link</div>
      <div className={'topic'}>Link</div>
      <div className={'topic'}>Disabled</div>
      <div className={'topic'}>
        <FaPlus />
      </div>
    </div>
  )
}
