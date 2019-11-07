import * as React from "react";

import { Link } from "../../types";
import Container from "../Container";

interface NavigationProps {
  pages: Link[];
}

const Navigation: React.FC<NavigationProps> = ({ pages }) => {
  return (
    <nav className="zn-main-nav">
      <Container>
        <ul>
          {pages.map((page, i) => (
            <li key={`link-${i}`}>
              <a href={page.path}>{page.title}</a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
