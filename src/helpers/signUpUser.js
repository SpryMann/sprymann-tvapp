import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

const signUpUser = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default signUpUser;
