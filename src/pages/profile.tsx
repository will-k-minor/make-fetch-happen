import { FC, useMemo, useRef } from "react";
import { useProfile } from "../client/profile-hook";

const Profile: FC<{ userId: number }> = ({ userId }) => {
  const currentUser = useRef<number>(userId);
  const { getUserData, isLoading, error } = useProfile();

  // Should create a Profile component for display
  // handle any changes to the profile here and then hand off data to display

  useMemo(() => {
    getUserData(currentUser.current);
  }, [currentUser, getUserData]);

  return isLoading ? (
    <div> Loading... </div>
  ) : (
    <div> {error ? error : "Profile goes here..."} </div>
  );
};

export default Profile;
