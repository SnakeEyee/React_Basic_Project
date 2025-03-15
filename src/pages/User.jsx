import { useEffect, useState } from "react";
import { GetUserDataRequest } from "@services/UserServices";

import UserDataTable from "@comps/ui/UserTable/UserDataTable";

import { FaClipboardUser } from "react-icons/fa6";
import "@styles/User.css";

export default function User() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await GetUserDataRequest();
      if (response.UserData) {
        setUser(response.UserData);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="user-container">
      <FaClipboardUser className="user-icon" />
      <UserDataTable user={user} />
    </div>
  );
}
