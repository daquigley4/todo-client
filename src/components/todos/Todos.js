import React, { Component } from 'react';
import Loader from '../utils/Loader';
import TodoList from './TodoList';
import '../../styles/Todos.css'

class Todos extends Component {
    constructor(props) {
      super(props)

      this.state = {
        incompleteTasks: [],
        completeTasks: [],
        userId: props.match.params.userId
      }
    }

    mainTopics = (topics) => topics.map((topic, i) => Object.keys(topic))
    .reduce((prev, curr) => prev.concat(curr))
    .map(topic=>topic.toLowerCase().replace('/','-'))

    componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(todos => {
        const incompleteTasks = todos.filter(todo => !todo.completed)
        const completeTasks = todos.filter(todo => todo.completed)
        console.log("Incomplete",incompleteTasks);
        this.setState({completeTasks, incompleteTasks})
      })
    }

    render() {
      return(
        <div>
          <h1>
           Todo Lists
          </h1>

          <div>
            <TodoList
              headerClass="completeHeader"
              header="Complete"
              tasks={this.state.completeTasks}
            />
          </div>
          <div>
            <TodoList
              headerClass="incompleteHeader"
              header="Incomplete"
              tasks={this.state.incompleteTasks}
            />
          </div>
        </div>
      )
    }
}

export default Todos;
