import db from '../firebase-config';
import { auth } from '../firebase-config';
import { getDoc, doc } from 'firebase/firestore';

const getHistoryMovies = async () => {
  try {
    const docSnap = await getDoc(
      doc(
        db,
        'usersHistoryMovies',
        auth.currentUser.uid || JSON.parse(localStorage.getItem('user')).id
      )
    );

    if (docSnap.exists()) {
      return docSnap.data().movies;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};

export default getHistoryMovies;
