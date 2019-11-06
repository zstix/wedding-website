import * as React from "react";
import { Link } from "react-router-dom";

import { Page } from "../../types";
import Container from "../Container";

interface NavigationProps {
  pages: Page[];
}

const Navigation: React.FC<NavigationProps> = ({ pages }) => {
  return (
    <div className="zn-main-nav">
      <Container>
        <ul>
          {pages.map((page, i) => (
            <li key={`link-${i}`}>
              {page.disabled ? (
                <a className="zn-disabled">{page.title}</a>
              ) : (
                <Link to={page.path}>{page.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Navigation;
