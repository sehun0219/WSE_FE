import React, { useState } from "react";

const Profile = () => {
  const [tab, setTab] = useState("personal"); // 초기 탭은 'personal'로 설정

  return (
    <div>
      <button onClick={() => setTab("personal")}>Personal Info</button>
      <button onClick={() => setTab("account")}>Account Info</button>

      {tab === "personal" && (
        <div>
          <h2>Personal Info</h2>
          <p>Name: User's Name</p>
          <p>Email: User's Email</p>
          {/* ...다른 개인 정보 표시... */}
        </div>
      )}

      {tab === "account" && (
        <div>
          <h2>Account Info</h2>
          <p>Username: User's Username</p>
          <p>Password: User's Password</p>
          {/* ...다른 계정 정보 표시... */}
        </div>
      )}
    </div>
  );
};

export default Profile;
