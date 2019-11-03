import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Page } from "../types";
import Navigation from "./Navigation/";

// TODO: build these
const HomePage: React.FC = () => <div>We're getting married!</div>;
const Story: React.FC = () => <div>This is the story page</div>;
const Photos: React.FC = () => <div>This is the Photos page</div>;
const EventDetails: React.FC = () => <div>This is the Event Details page</div>;
const RSVP: React.FC = () => <div>This is the RSVP page</div>;
const WhatToDo: React.FC = () => <div>This is the What 2 Do page</div>;
const FAQ: React.FC = () => <div>This is the FAQ page</div>;

const App: React.FC = () => {
  // TODO: components
  const pages: Page[] = [
    { title: "Story", path: "/story", component: Story },
    { title: "Photos", path: "/photos", component: Photos },
    { title: "Event Details", path: "/event-details", component: EventDetails },
    { title: "RSVP", path: "/rsvp", component: RSVP },
    { title: "What to Do", path: "/what-to-do", component: WhatToDo },
    { title: "FAQ", path: "/faq", component: FAQ }
  ];

  return (
    <BrowserRouter>
      <Navigation pages={pages} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        {pages.map((page, i) => (
          <Route
            key={`page-${i}`}
            path={page.path}
            component={page.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
