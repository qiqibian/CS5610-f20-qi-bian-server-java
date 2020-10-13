import React from 'react'
import { ModuleList } from './ModuleList'
import { LessonTabs } from './LessonTabs'
import { TopicPills } from './TopicPills'
import { WidgetList } from './WidgetList'

export const CourseEditor = function() {
  return (
    <div className={'course-editor'}>
      <LessonTabs />
      <div style={{ display: 'flex' }}>
        <ModuleList />
        <div className={'course-editor-content'}>
          <TopicPills />
          <WidgetList />
        </div>
      </div>
    </div>
  )
}
