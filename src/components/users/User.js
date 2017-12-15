import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../styles/Users.css';

const User = ({...props}) => (
  <Link to={`${props.match.url}/${props.user.id}/todos`} key={props.user.id}>
    <Col xs={4} style={{margin: "10px auto"}}>
      <Col xs={12} className="card" style={{backgroundColor:
      `${props.randomColor(props.backgroundColors)}`}}>
        <div style={{textAlign: "center"}}>
          <h3><b>{props.user.username}</b></h3>
          <img src={`https://robohash.org/${props.user.username}.png?size=200x200`} alt="Avatar"
          style={{textAlign: 'center'}}/>
        </div>
        <hr/>
        <div style={{
          backgroundColor: '#FFF',
          textAlign: 'left',
          paddingLeft: '8px',
          margin: '-8px auto 14px'
        }}>
          <p><strong>Name: </strong>{props.user.name}</p>
          <p><strong>Email: </strong>{props.user.email}</p>
          <p><strong>Company: </strong>{props.user.company.name}</p>
          <p><strong>Website: </strong>{props.user.website}</p>
        </div>
      </Col>
    </Col>
  </Link>
)

export default User;
