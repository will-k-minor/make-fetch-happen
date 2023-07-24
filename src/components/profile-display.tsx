import { FC } from "react";
import { ProfileResponse } from "../client/profile-types";
import { TextBlob } from "./text-blob/text-blob";
import { AddressDisplay } from "./address-display";

export const ProfileDisplay: FC<{ profile: ProfileResponse }> = ({
  profile,
}) => {
  return (
    <div>
      <TextBlob label={"Name"}>
        <p>{profile.name}</p>
      </TextBlob>
      <AddressDisplay address={profile.address} />
    </div>
  );
};
