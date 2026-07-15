import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  as?: "div" | "section" | "header" | "footer" | "main";
  className?: string;
  id?: string;
};

export function Container({
  children,
  as: Tag = "div",
  className = "",
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={`container-grid ${className}`}>
      {children}
    </Tag>
  );
}
