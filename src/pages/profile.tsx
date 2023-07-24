import { FC, useEffect, useRef } from "react";
import { useProfile } from "../client/profile-hook";
import { ProfileDisplay } from "../components/profile-display";

const Profile: FC<{ userId: number }> = ({ userId }) => {
  const currentUser = useRef<number>(userId);
  const { getUserData, isLoading, error, userData } = useProfile();

  // Should create a Profile component for display
  // handle any changes to the profile here and then hand off data to display

  useEffect(() => {
    getUserData(currentUser.current);
  }, [currentUser, getUserData]);

  return isLoading ? (
    <div> Loading... </div>
  ) : (
    <div>
      {" "}
      {error ? error : userData && <ProfileDisplay profile={userData} />}{" "}
    </div>
  );
};

export default Profile;
