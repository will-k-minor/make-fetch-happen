import { FC } from "react";
import "./text-blob.css";

export const TextBlob: FC<{ label?: string; children: JSX.Element }> = ({
  label,
  children,
}) => {
  return (
    <div className="text-blob-container">
      {label && <p className="bold">{label}</p>}
      <p>{children}</p>
    </div>
  );
};
