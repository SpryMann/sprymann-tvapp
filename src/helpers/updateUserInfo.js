import db from '../fireabse-config';
import { setDoc, doc } from 'firebase/firestore';

const updateUserInfo = async (userId, name, nickname, imageUrl) => {
  try {
    await setDoc(doc(db, 'usersInfo', userId), {
      name,
      nickname,
      imageUrl,
    });
  } catch (error) {
    console.log(error);
  }
};

export default updateUserInfo;
