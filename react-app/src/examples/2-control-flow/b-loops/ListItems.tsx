import React, { useState } from 'react';

const ListItems: React.FC = () => {
  const [cats] = useState([
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
  ]);

  return (
    <ul>
      {cats.map((cat, i) => (
        <li key={i}>
          <a target="blank" href={`https://www.youtube.com/watch?v=${cat.id}`}>
            {i + 1}: {cat.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
