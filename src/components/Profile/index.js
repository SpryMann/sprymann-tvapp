import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase-config';
import getUserInfo from '../../helpers/getUserInfo';
import updateUserInfo from '../../helpers/updateUserInfo';
import {
  UPDATE_IS_LOADING,
  CHANGE_MESSAGE,
  CHANGE_SHOW_MESSAGE,
} from '../../redux/uiReducer/consts';
import { UPDATE_USER_INFO } from '../../redux/userReducer/consts';
import './Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userInfo = useSelector((state) => state.user.userInfo);
  const [nameInput, setNameInput] = useState(userInfo.name);
  const [nicknameInput, setNicknameInput] = useState(userInfo.nickname);
  const [urlInput, setUrlInput] = useState(userInfo.imageUrl);

  const handleLogout = () => {
    auth.signOut();
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    updateUserInfo(user.uid, nameInput, nicknameInput, urlInput).then(() => {
      getInfo();
      dispatch({ type: CHANGE_MESSAGE, payload: 'Data about user updated' });
      dispatch({ type: CHANGE_SHOW_MESSAGE, payload: true });
    });
  };

  const getInfo = useCallback(() => {
    dispatch({ type: UPDATE_IS_LOADING, payload: true });
    getUserInfo(user.uid)
      .then((data) => {
        dispatch({ type: UPDATE_USER_INFO, payload: data });
        setNameInput(data.name);
        setNicknameInput(data.nickname);
        setUrlInput(data.imageUrl);
        dispatch({ type: UPDATE_IS_LOADING, payload: false });
      })
      .catch((error) => {
        dispatch({ type: CHANGE_MESSAGE, payload: error.code });
        dispatch({ type: CHANGE_SHOW_MESSAGE, payload: true });
      });
  }, [user, dispatch]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <div className="profile">
      <div className="profile__card">
        <img
          className="profile__img"
          src={
            userInfo.imageUrl
              ? userInfo.imageUrl
              : 'https://images.unsplash.com/photo-1644299423953-608091d04805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
          }
          alt={userInfo.name ? userInfo.name : 'Profile'}
        />
        <p className="profile__info">
          Email: {user.email ? user.email : 'user@gmail.com'}
        </p>
        <p className="profile__info">
          Name: {userInfo.name ? userInfo.name : 'your name'}
        </p>
        <p className="profile__info">
          Nickname: {userInfo.nickname ? userInfo.nickname : 'your nickname'}
        </p>
        <button className="profile__button" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>

      <form className="profile__edit" onSubmit={(e) => handleSubmitForm(e)}>
        <div className="edit__wrap edit__wrap--half">
          <p className="edit__heading">Name</p>
          <input
            className="edit__input"
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>

        <div className="edit__wrap edit__wrap--half">
          <p className="edit__heading">Nickname</p>
          <input
            className="edit__input"
            type="text"
            value={nicknameInput}
            onChange={(e) => setNicknameInput(e.target.value)}
          />
        </div>

        <div className="edit__wrap">
          <p className="edit__heading">Profile image (url)</p>
          <input
            className="edit__input"
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />
        </div>

        <button className="profile__button">Save</button>
      </form>
    </div>
  );
};

export default Profile;
