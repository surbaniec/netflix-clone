import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );
  const { firebaseConnection } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebaseConnection
      .auth()
      .onAuthStateChanged((authUser) => {
        if (authUser) {
          localStorage.setItem('authUser', JSON.stringify(authUser));
          setUser(authUser);
        } else {
          localStorage.removeItem('authUser');
          setUser(null);
        }
      });

    return () => listener();
  }, []);

  return { user };
}
