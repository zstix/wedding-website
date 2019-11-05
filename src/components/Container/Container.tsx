import * as React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<ContainerProps> = ({ children, className = "" }) => (
  <div className={`zn-container ${className}`.trim()}>{children}</div>
);

export default Container;
