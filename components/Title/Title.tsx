import * as React from "react";

interface TitleProps {
  names: String[];
}

const Title: React.FC<TitleProps> = ({ names }) => (
  <header className="zn-title">
    <a href="/">
      <span className="zn-title-name">{names[0]}</span>
      <span className="zn-title-amp">&amp;</span>
      <span className="zn-title-name">{names[1]}</span>
    </a>
  </header>
);

export default Title;
