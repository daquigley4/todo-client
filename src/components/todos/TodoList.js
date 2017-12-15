import React from 'react';
import {Row, Col, Badge} from 'react-bootstrap';

const TodoList = (props) => (
  <Col xs={5} className="tasks">
    <Row>
      <Col xs={12} className="props.headerClass">
        <h3>
          {props.header}
          <span>
            <Badge>{props.tasks.length}</Badge>
          </span>
        </h3>
      </Col>
    </Row>
    <Col xs={12} className="task">
      <ul>
        {props.tasks.title.map(task, i) => <li key={i}>}
      </ul>
    </Col>
  </Col>
)

export default TodoList;
