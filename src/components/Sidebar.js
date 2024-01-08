// Sidebar.js
import React from 'react';

const Sidebar = ({ listItems }) => {
  return (
    <aside className="sidebar">
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
