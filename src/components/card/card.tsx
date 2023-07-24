import { FC } from "react";
import "./card.css";

export const Card: FC<{ options?: JSX.Element; children: JSX.Element }> = ({
  options,
  children,
}) => {
  return (
    <div className="card-container">
      {options && <div className="options-bar">{options}</div>}
      {children}
    </div>
  );
};
