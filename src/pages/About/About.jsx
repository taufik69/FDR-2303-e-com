import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
const About = () => {
  const auth = getAuth();
  const db = getDatabase();
  const [userinfo, setuserinfo] = useState({});
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (auth.currentUser.uid === item.key) {
          setuserinfo({ ...item.val(), useKey: item.key });
        }
      });
    });
  }, []);

  console.log(userinfo);

  return (
    <div>
      <img src={userinfo.profile_picture} alt="" />
    </div>
  );
};

export default About;
