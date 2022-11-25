import React, { Component } from 'react'

export default class  Header extends React.Component {
  render() {
    return (
        <div className='wrapper'>
        <header>
          <a href='' className='logo'>Freelancer</a>
          <nav className='nav'>
            <ul className='nav__menu menu'>
              <li className='menu__item'><a href=''>Projects</a></li>
              <li className='menu__item'><a href=''>Skills</a></li>
              <li className='menu__item'><a href=''>Contacts</a></li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}