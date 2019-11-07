import * as React from "react";

const Title: React.FC = () => (
  <header className="zn-title">
    <a href="/">
      {/* TODO: update these based on domain */}
      <span className="zn-title-name">Zack</span>
      <span className="zn-title-amp">&amp;</span>
      <span className="zn-title-name">Nina</span>
    </a>
  </header>
);

export default Title;
