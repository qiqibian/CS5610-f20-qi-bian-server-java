import React from 'react';
import { AiFillFileText, AiOutlineCheck } from 'react-icons/ai/index'
import { FormControl } from 'react-bootstrap'
import { BiEditAlt } from 'react-icons/bi/index'
import { BsFillTrashFill } from 'react-icons/bs/index'

export const CourseRows = function(props) {
  const { currentCourse, setCurrentCourse, course, editCourse, setEditCourse } = props;

  return (
    <tr
      className={(currentCourse && currentCourse.id === course.id) ? 'active' : ''}
      key={course.id}
      onClick={() => setCurrentCourse(course)}
    >
      <td className='title'>
        <AiFillFileText />
        {
          (editCourse && editCourse.id === course.id) ?
            <FormControl
              style={{ width: 'auto' }}
              value={ editCourse.title }
              onChange={ (e) => { setEditCourse({...editCourse, title: e.target.value}) } }
            />:
            <span>{ course.title }</span>
        }
      </td>
      <td className='owned'>{ course.owned }</td>
      <td className='modified'>{ course.modified }</td>
      <td className='operate'>
        {
          (currentCourse && currentCourse.id === course.id) &&
          (!editCourse ?
              <>
                <BiEditAlt onClick={() => setEditCourse(course)}/>
                <BsFillTrashFill onClick={() => props.remove(course.id)} />
              </> :
              <AiOutlineCheck onClick={() => {props.update(course.id, editCourse); setEditCourse(null)}}/>
          )
        }
      </td>
    </tr>
  )
}
