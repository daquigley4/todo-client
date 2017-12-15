import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <NavLink exact to="/" activeClassName="active">OM ToDo</NavLink>
    <NavLink to="/team-members" activeClassName="active">Team Members</NavLink>
    <NavLink to="/new-task" activeClassName="active">Add Task</NavLink>
  </nav>
);

export default Navbar;
