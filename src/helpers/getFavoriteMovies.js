import db from '../firebase-config';
import { auth } from '../firebase-config';
import { getDoc, doc } from 'firebase/firestore';

const getFavoriteMovies = async () => {
  try {
    const docSnap = await getDoc(
      doc(
        db,
        'usersFavoriteMovies',
        auth.currentUser.uid || JSON.parse(localStorage.getItem('user')).uid
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

export default getFavoriteMovies;
