import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { LOGIN_USER, LOGOUT_USER } from '../redux/userReducer/consts';
import MoviesPage from '../pages/MoviesPage';
import ProfilePage from '../pages/ProfilePage';
import SignUpPage from '../pages/SignUpPage';

const AppRouter = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch({
          type: LOGIN_USER,
          payload: { uid: userAuth.uid, email: userAuth.email },
        });
        localStorage.setItem(
          'user',
          JSON.stringify({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch({ type: LOGOUT_USER, payload: null });
        localStorage.removeItem('user');
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/">
        {!user && (
          <Route path="movies/favorite" element={<Navigate to={'/signup'} />} />
        )}
        {!user && (
          <Route path="movies/history" element={<Navigate to={'/signup'} />} />
        )}
        <Route path="movies" element={<MoviesPage />}>
          <Route path="*" element={<MoviesPage />} />
        </Route>
        {!user ? (
          <Route path="profile" element={<Navigate to={'/signup'} />} />
        ) : (
          <Route path="profile" element={<ProfilePage />} />
        )}
        {user ? (
          <Route path="signup" element={<Navigate to={'/profile'} />} />
        ) : (
          <Route path="signup" element={<SignUpPage />} />
        )}
        {user ? (
          <Route path="signin" element={<Navigate to={'/profile'} />} />
        ) : (
          <Route path="signin" element={<SignUpPage />} />
        )}
      </Route>
    </Routes>
  );
};

export default AppRouter;
