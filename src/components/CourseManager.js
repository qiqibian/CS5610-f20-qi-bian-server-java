import React, { useEffect, useState } from 'react'
import { Header } from './Header';
import { CourseTable } from './CourseTable';
import { createCourse, deleteCourse, findAllCourses, updateCourse } from '../services/CourseService'
import { CourseGrid } from './CourseGrid';

export const CourseManager = function() {
  const [courses, setCourses] = useState(null);
  const [isTableView, setIsTableView] = useState(true);

  useEffect(() => {
    getAllCourses();
  }, []);

  function getAllCourses() {
    findAllCourses().then(courses => {
      setCourses(courses);
    });
  }

  function removeCourse(id) {
    deleteCourse(id).then(result => {
      getAllCourses();
    });
  }

  function update(id, course) {
    updateCourse(id, course).then(result => {
      getAllCourses();
    })
  }

  function add() {
    const newCourse = Object.assign({}, courses[courses.length - 1]);
    newCourse.id++;
    createCourse(newCourse).then(() => {
      getAllCourses();
    });
  }

  return (
    <>
      <Header add={add} />
      {
        isTableView ? <CourseTable courses={courses} remove={removeCourse} update={update} setIsTableView={setIsTableView} />:
          <CourseGrid courses={courses} setIsTableView={setIsTableView} />
      }
    </>
  )
}
