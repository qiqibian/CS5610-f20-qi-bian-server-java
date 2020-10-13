import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { CourseCard } from './CourseCard'
import { FaListUl } from "react-icons/fa";
import { BsFillFolderFill, BsFillCaretDownFill } from "react-icons/bs";
import { MdSortByAlpha } from "react-icons/md";

export const CourseGrid = function(props) {

  return (
    <Container className='grid-container'>
      <div className='grid-header'>
        <div>Recent documents</div>
        <div>
          <span>Owned by me</span>
          <BsFillCaretDownFill />
        </div>
        <div className='grid-icon'>
          <FaListUl onClick={() => props.setIsTableView(true)} />
          <MdSortByAlpha />
          <BsFillFolderFill />
        </div>
      </div>
      <Row className='grid-row'>
        {
          props.courses && props.courses.map((course, i) => <Col xs={12} xl={2} sm={6} md={4} lg={3} key={i}><CourseCard course={course} /></Col>)
        }
      </Row>
    </Container>
  )
}
