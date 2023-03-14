import SelectProfileContainer from './profiles';
import { FirebaseContext } from '../context/firebase';
import { useContext, useEffect, useState } from 'react';
import Loading from '../components/loading';
import Header from '../components/header';

function BrowseContainer({ slides }) {
  const { firebaseConnection } = useContext(FirebaseContext);
  const user = firebaseConnection.auth().currentUser || {};

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src='joker1'></Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

export default BrowseContainer;
