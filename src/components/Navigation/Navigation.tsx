import * as React from "react";
import { Link } from "react-router-dom";

import { Page } from "../../types";
import Container from "../Container";

interface NavigationProps {
  pages: Page[];
}

const Navigation: React.FC<NavigationProps> = ({ pages }) => {
  return (
    <Container className="zn-main-nav">
      <ul>
        {pages.map((page, i) => (
          <li key={`link-${i}`}>
            <Link to={page.path}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Navigation;
