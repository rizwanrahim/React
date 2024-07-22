import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success";
  onClick?: () => void;
}

export const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};
