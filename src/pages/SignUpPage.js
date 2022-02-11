import React from 'react';
import Sidebar from '../components/Sidebar';
import SignUp from '../components/SignUp';
import Topbar from '../components/Topbar';

const SignUpPage = () => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Topbar />
        <SignUp />
      </div>
    </>
  );
};

export default SignUpPage;
