// src/components/NavigationBar.js

import React from 'react';
import './NavigationBar.css'; // Make sure to create a CSS file with your styles

function NavigationBar() {
  return (
    <nav className="site-menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
