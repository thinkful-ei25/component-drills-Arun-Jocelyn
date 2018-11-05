
import React from 'react';

import './navigation-bar.css';


export default function NavigationBar(props) {
  const navItems = props.links.map((link) => {
    return (
      <li><a href={link.href}>{link.text}</a></li>
    )
  })  
  
  return (
      <div className="navigation-bar">
      <h1>{props.title}</h1>
      <nav className="navigation-bar-nav"><ul>{navItems}</ul></nav>
      </div>
    );
}
