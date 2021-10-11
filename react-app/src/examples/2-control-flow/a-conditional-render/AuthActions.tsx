import React, { useState } from 'react';
import Button from '@Components/Button';

const AuthActions: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <>
      {!loggedIn && (
        <Button className="mt-2" onClick={() => setLoggedIn(true)}>
          Log in
        </Button>
      )}
      {loggedIn && (
        <Button className="mt-2" onClick={() => setLoggedIn(false)}>
          Log out
        </Button>
      )}
    </>
  );
};

export default AuthActions;
