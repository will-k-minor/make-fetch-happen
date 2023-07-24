import { FC } from "react";
import { Address } from "../client/profile-types";
import { TextBlob } from "./text-blob/text-blob";
import "./address-display.css";

export const AddressDisplay: FC<{ address: Address }> = ({ address }) => {
  return (
    <div>
      <span className="street-and-suite">
        <TextBlob label={"Street"}>
          <span>{address.street}</span>
        </TextBlob>
        {address.suite && (
          <TextBlob label={"Suite"}>
            <span>{address.suite}</span>
          </TextBlob>
        )}
      </span>
      <TextBlob label={"City"}>
        <span>{address.city}</span>
      </TextBlob>
      <TextBlob label={"ZipCode"}>
        <span>{address.zipcode}</span>
      </TextBlob>
    </div>
  );
};
