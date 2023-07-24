import { FC } from "react";
import "./text-blob.css";

export const TextBlob: FC<{ label?: string; children: JSX.Element }> = ({
  label,
  children,
}) => {
  return (
    <div className="text-blob-container">
      {label && <span className="bold">{label}</span>}
      <div className="children">{children}</div>
    </div>
  );
};
