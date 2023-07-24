import { FC } from "react";

// A way to extend the set of props for a standard HMTL Tag (i.e. <input>)
export interface InputProps extends React.ComponentProps<"input"> {
  labelText?: string;
}

export const Input: FC<InputProps> = ({ labelText, ...inputProps }) => {
  return (
    <div className="input-container">
      {labelText && <label>{labelText}</label>}
      <input {...inputProps}></input>
    </div>
  );
};
