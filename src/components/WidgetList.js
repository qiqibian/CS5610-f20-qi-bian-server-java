import React from 'react'
import { Button, FormControl } from 'react-bootstrap'
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineClose } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";

export const WidgetList = function() {
  return (
    <div className={'widget-wrap'}>
      <div style={{ textAlign: 'right' }}>
        <Button variant="success">Save</Button>
        <span>Preview</span>
      </div>
      <div className={'widget'}>
        <div className={'widget-header'}>
          <div>Heading widget</div>
          <div>
            <Button variant="warning">
              <AiOutlineArrowUp />
            </Button>
            <Button variant="warning">
              <AiOutlineArrowDown />
            </Button>
            <FormControl value='Heading' style={{ width: 100 }} />
            <Button variant="danger">
              <AiOutlineClose />
            </Button>
          </div>
        </div>
        <div className={'widget-content'}>
          <FormControl value='Heading text' />
          <FormControl value='Heading 1' />
          <FormControl value='Widget name' />
        </div>
        <h4>Preview</h4>
        <h1>Heading text</h1>
      </div>
      <div style={{ margin: '20px 0', textAlign: 'right' }}>
        <Button variant="danger">
          <BsFillPlusCircleFill />
        </Button>
      </div>
    </div>
  )
}
