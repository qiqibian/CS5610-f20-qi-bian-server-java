import React from 'react';
import { FormControl } from 'react-bootstrap'
import '../App.css';
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";

export const Header = function (props) {
  return (
    <div className='header-wrap'>
      <div className='header-btn'>
        <AiOutlineMenu />
      </div>
      <div className='header-title'>Course Maneger</div>
      <div className='header-middle'>
        <FormControl placeholder="New Course"/>
      </div>
      <div className='header-btn'>
        <BsFillPlusCircleFill onClick={() => props.add()} />
      </div>
    </div>
  );
}
