import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Loader from '../utils/Loader';
import User from './User';
import '../../styles/Users.css';

class Users extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      backgroundColors: [
    '#D1FFA2',
    '#00CF95',
    '#0098EF',
    '#6D0AD3',
    '#7B77FF',
    '#4ED99C',
    '#EEEEEE',
    '#15B7B9',
    '#BBE9DB'
  ]
    }
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(users => {
      this.setState({users})
    })
  }

  randomColor = (bgColors) => bgColors[Math.floor(Math.random() * bgColors.length)]

  render() {
    let {users, backgroundColors} = this.state;

    let usersArray = users.map(user => {
      return (
        <User {...this.props} user={user} key={user.id} randomColor={this.randomColor} backgroundColors={backgroundColors}/>
      )
    })

    return(
      <div className='container'>
        <h1> Team Members </h1>
        { users.length > 0 ?
            <Row>
              {usersArray}
            </Row>
          :
          <Col xs={1} xsOffset={5}>
            <Loader/>
          </Col>
        }
      </div>
    );
  }
}

export default Users;
