import React from 'react';
import { NavLink } from 'react-router-dom';

const menu = [
  {
    sectionName: '1. Introduction',
    children: [
      { path: '/', label: 'Hello world' },
      { path: '/counter', label: 'Counter' },
      { path: '/interval', label: 'Interval' },
      { path: '/effects', label: 'Effects' },
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
      {menu.map((menuItem, i) => (
        <div key={i}>
          <span className="fs-5 text-white">{menuItem.sectionName}</span>
          <hr />
          <ul className="nav nav-pills flex-column mb-4">
            {menuItem.children.map((child, j) => (
              <li key={j} className="nav-item">
                <NavLink
                  exact
                  to={child.path}
                  className="nav-link text-decoration-none text-white"
                  activeClassName="active"
                  aria-current="page"
                >
                  {child.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
