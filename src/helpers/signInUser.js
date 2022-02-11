import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

const signInUser = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default signInUser;
