import * as React from "react";

import Container from "../Container";

interface Page {
  title: string;
  path: string;
}

const Navigation: React.FC = () => {
  const pages: Page[] = [
    { title: "Story", path: "" },
    { title: "Photos", path: "" },
    { title: "Event Details", path: "" },
    { title: "RSVP", path: "" },
    { title: "What to Do", path: "" },
    { title: "RSVP", path: "" }
  ];

  return (
    <Container className="zn-main-nav">
      <ul>
        {pages.map((page, i) => (
          <li key={`page-${i}`}>
            <a href={page.path}>{page.title}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Navigation;
