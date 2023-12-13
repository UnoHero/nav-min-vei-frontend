// src/components/UserInfo.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserInfo = ({ firstName }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/hent/${firstName}`);
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (firstName) {
      fetchData();
    }
  }, [firstName]);

  return (
    <div>
      <h2>User Information</h2>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default UserInfo;
