import db from '../fireabse-config';
import { getDoc, doc } from 'firebase/firestore';

const getUserInfo = async (userId) => {
  try {
    const docSnap = await getDoc(doc(db, 'usersInfo', userId));

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return {
        name: '',
        nickname: '',
        imageUrl: '',
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export default getUserInfo;
