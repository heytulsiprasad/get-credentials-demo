import React, { useState, useEffect } from "react";
import { auth } from "./../firebase";

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}

const CurrentUser = () => {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const unsubscribe = () => {
      forceUpdate();
    };

    auth.onAuthStateChanged(unsubscribe);
  }, [forceUpdate]);

  return (
    <div>
      <h2>Hi, I'm the Current User</h2>
      <button onClick={() => auth.signOut()}>Logout</button>
      <div>
        <pre>
          <code>{JSON.stringify(auth.currentUser, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export default CurrentUser;
