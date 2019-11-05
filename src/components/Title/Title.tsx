import * as React from "react";
import { Link } from "react-router-dom";

const Title: React.FC = () => {
  const names =
    window.location.hostname === "ninaandzack"
      ? ["Nina", "Zack"]
      : ["Zack", "Nina"];

  return (
    <header className="zn-title">
      <Link to="/">
        <span className="zn-title-name">{names[0]}</span>
        <span className="zn-title-amp">&nbsp;&amp;&nbsp;</span>
        <span className="zn-title-name">{names[1]}</span>
      </Link>
    </header>
  );
};

export default Title;
