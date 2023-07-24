import { FC } from "react";
import { ProfileResponse } from "../client/profile-types";
import { TextBlob } from "./text-blob/text-blob";
import { AddressDisplay } from "./address-display";
import { Card } from "./card/card";

export const ProfileDisplay: FC<{ profile: ProfileResponse }> = ({
  profile,
}) => {
  return (
    <Card options={<ProfileOptions />}>
      <>
        <TextBlob label={"Name"}>
          <span>{profile.name}</span>
        </TextBlob>
        <AddressDisplay address={profile.address} />
      </>
    </Card>
  );
};

const ProfileOptions: FC = () => {
  return (
    <span>
      <button> Edit </button>
    </span>
  );
};
