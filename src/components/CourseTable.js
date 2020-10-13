import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { BsGrid3X3GapFill, BsFillCaretUpFill } from "react-icons/bs";
import { AiOutlineSortAscending } from "react-icons/ai";
import '../App.css';
import { CourseRows } from './CourseRows';

export const CourseTable = function (props) {
  const [currentCourse, setCurrentCourse] = useState(null);
  const [editCourse, setEditCourse] = useState(null);

  return (
    <Table responsive className='course-table'>
      <thead>
        <tr>
          <th>
            <span>Title</span>
            <BsFillCaretUpFill />
          </th>
          <th className='owned'>Owned by</th>
          <th className='modified'>Last modified</th>
          <th>
            <BsGrid3X3GapFill onClick={() => props.setIsTableView(false)} />
            <AiOutlineSortAscending />
          </th>
        </tr>
      </thead>
      <tbody>
        {
          props.courses && props.courses.map(course =>
            <CourseRows
              currentCourse={currentCourse}
              setCurrentCourse={setCurrentCourse}
              course={course}
              editCourse={editCourse}
              setEditCourse={setEditCourse}
              update={props.update}
              remove={props.remove}
            />)
        }
      </tbody>
    </Table>
  )
}
