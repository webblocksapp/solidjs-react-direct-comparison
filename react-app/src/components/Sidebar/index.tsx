import React from 'react';
import { NavLink } from 'react-router-dom';

const menu = [
  {
    sectionName: '1. Introduction',
    children: [{ path: '/', label: 'Simple render' }],
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
                  to={child.path}
                  className="nav-link active text-decoration-none"
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
