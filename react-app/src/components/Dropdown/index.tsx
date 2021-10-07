import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Route } from '@Types';

const menu: Menu[] = [
  {
    sectionName: '1. Introduction',
    routes: [{ path: '/', label: 'Components' }],
  },
  {
    sectionName: '2. Control Flow',
    routes: [],
  },
];

const Dropdown: React.FC = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState<string>();

  const findSelectedItem = () => {
    menu.forEach((menuItem) => {
      const foundRoute = menuItem.routes.find(
        (route) => route.path === location.pathname
      );

      if (foundRoute) {
        assignItemName(menuItem, foundRoute);
      }
    });
  };

  const assignItemName = (menuItem: Menu, route: Route) => {
    setSelectedItem(`${menuItem.sectionName} / ${route.label}`);
  };

  useEffect(() => {
    findSelectedItem();
  }, []);

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedItem}
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        {menu.map((menuItem, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <li>
                <hr className="dropdown-divider" />
              </li>
            )}
            <li>
              <span className="dropdown-item no-hover">
                {menuItem.sectionName}
              </span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            {menuItem.routes.map((route, j) => (
              <li key={j}>
                <NavLink
                  exact
                  className="dropdown-item"
                  activeClassName="active"
                  to={route.path}
                  onClick={() => assignItemName(menuItem, route)}
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
